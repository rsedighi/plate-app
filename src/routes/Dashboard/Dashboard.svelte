<script>
  import { onMount, onDestroy } from 'svelte';
  import { navigateTo } from 'svelte-router-spa';

  import Meta from '../../components/Meta/Meta';
  import FAB from '../../components/FAB/FAB';
  import { firebaseUser, db } from '../../store/firebase';
  import Loader from '../../components/Loader/Loader';

  import Plate from './components/Plate/Plate';

  export let currentRoute;
  export let params;

  let plates = [];
  let loading = true;
  let unsubscribe;

  const createPlate = () => {
    navigateTo('/create-plate');
  }

  onMount(async () => {
    loading = true;

    unsubscribe =  await db.collection('plates')
      .where('createdBy', '==', $firebaseUser.uid)
      .onSnapshot(querySnapshot => {
        plates = [];

        querySnapshot.forEach(doc => {
          const plate = {
            ...doc.data(),
            id: doc.id
          }

          plates = [...plates, plate];
        });

        loading = false;
      });
  });

  onDestroy(() => {
    unsubscribe();
  });
</script>

<Meta
  title="Dashboard"
  description="Plate dashboard is where you get an overview of your plates and
  can start managing them" />
{#if loading}
  <Loader fullPage />
{/if}
<div class="p-4">
  <div class="grid md:grid-flow-row md:grid-cols-2 lg:grid-cols-3 gap-4">
    {#each plates as plate}
      <Plate
        id={plate.id}
        title={plate.title}
        description={plate.description}
        dueDate={plate.dueDate}
        category={plate.category} />
    {/each}
  </div>
  <FAB on:click={createPlate} />
</div>
