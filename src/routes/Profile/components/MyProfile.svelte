<script>
  import { faPlus } from '@fortawesome/free-solid-svg-icons/faPlus';
  import { faTimes } from '@fortawesome/free-solid-svg-icons/faTimes';
  import Modal from '../../../components/Modal.svelte';
  import Input from '../../../components/Button';
  import Button from '../../../components/Button.svelte';
  import Icon from '../../../components/Icon.svelte';

  let edit = false;
  let editProfile = false;

  function profileModal() {
    let edit = true;
    let editProfile = true;
    console.log(editProfile);
  }
</script>

<div class="shadow bg-white rounded-lg p-4 h-64">
  <div class="flex flex-row justify-between items-center">
    <h3 class="text-xl font-bold text-gray-700 mb-2 uppercase">Profile</h3>
    <Icon
      class="cursor-pointer -mt-2"
      fill="#4a5568"
      icon={faPlus}
      height="1.2rem"
      width="1.2rem"
      on:click={profileModal} />
    edit profile?
    <Icon
      class="cursor-pointer -mt-2"
      fill="#4a5568"
      icon={faTimes}
      height="1.2rem"
      width="1.2rem"
      on:click={profileModal} />
  </div>
  <Modal title="yo" isOpen={editProfile}>yo</Modal>
</div>
