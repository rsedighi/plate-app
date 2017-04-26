import { Card, CardHeader } from 'material-ui/Card'
import { List, ListItem } from 'material-ui/List'

import Avatar from 'material-ui/Avatar'
import Divider from 'material-ui/Divider'
import EditIcon from 'material-ui/svg-icons/editor/mode-edit'
import EmailIcon from 'material-ui/svg-icons/communication/email'
import PhoneIcon from 'material-ui/svg-icons/communication/call'
import PropTypes from 'prop-types'
import React from 'react'

const ProfilePage = ({ user }) => {
  return (
    <div className="container-fluid">
      <div className="row full-height">
        <div className="left col-xs-12 col-sm-12 col-md-6 col-lg-6 center-xs center-sm center-md center-lg center-lg">
          <Avatar
            src="https://res.cloudinary.com/knipferrc/image/upload/v1493213458/aleximage_t1aaer.jpg"
            size={200}
            style={{ marginBottom: 20 }}
          />
          <h3>{user.firstName + ' ' + user.lastName}</h3>
        </div>
        <div className="right col-xs-12 col-sm-12 col-md-6 col-lg-6">
          <Card
            style={{ width: '100%', marginTop: '20px', marginBottom: '20px' }}
          >
            <CardHeader title="Contact Information" />
            <Divider />
            <List>
              <ListItem
                primaryText="Inbox"
                leftIcon={<EmailIcon />}
                rightIcon={<EditIcon />}
              />
              <ListItem
                primaryText="Starred"
                leftIcon={<EmailIcon />}
                rightIcon={<EditIcon />}
              />
              <ListItem
                primaryText="Sent mail"
                leftIcon={<EmailIcon />}
                rightIcon={<EditIcon />}
              />
              <ListItem
                primaryText="Drafts"
                leftIcon={<EmailIcon />}
                rightIcon={<EditIcon />}
              />
              <ListItem
                primaryText="Inbox"
                leftIcon={<EmailIcon />}
                rightIcon={<EditIcon />}
              />
            </List>
          </Card>
          <Card style={{ width: '100%', marginBottom: '20px' }}>
            <List>
              <ListItem
                leftIcon={<PhoneIcon />}
                primaryText="(650) 555 - 1234"
                secondaryText="Mobile"
              />
              <ListItem
                leftIcon={<PhoneIcon />}
                primaryText="(323) 555 - 6789"
                secondaryText="Work"
              />
            </List>
          </Card>
        </div>
      </div>
      <style jsx>
        {`
          .container-fluid {
            margin-top: 80px;
          }
        `}
      </style>
    </div>
  )
}

ProfilePage.propTypes = {
  user: PropTypes.object
}

export default ProfilePage
