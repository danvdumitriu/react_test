import React, { useState } from 'react'

import AddIcon from '@material-ui/icons/Add'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import IconButton from '@material-ui/core/IconButton'
import PropTypes from 'prop-types'
import Switch from '@material-ui/core/Switch'
import TextField from '@material-ui/core/TextField'
import Tooltip from '@material-ui/core/Tooltip'

const initialUser = {
  title: '',
  published: '',
  site: '',
  adGroup: '',
  bids: 0,
  spending: 0,
  winRate: 0,
  impressions: 0,
  clicks: 0,
  ctr: 0
}

const AddUserDialog = props => {
  const [user, setUser] = useState(initialUser)
  const { addUserHandler } = props
  const [open, setOpen] = React.useState(false)

  const [switchState, setSwitchState] = React.useState({
    addMultiple: false,
  })

  const handleSwitchChange = name => event => {
    setSwitchState({ ...switchState, [name]: event.target.checked })
  }

  const resetSwitch = () => {
    setSwitchState({ addMultiple: false })
  }

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
    resetSwitch()
  }

  const handleAdd = event => {
    addUserHandler(user)
    setUser(initialUser)
    switchState.addMultiple ? setOpen(true) : setOpen(false)
  }

  const handleChange = name => ({ target: { value } }) => {
    setUser({ ...user, [name]: value })
  }

  return (
    <div>
      <Tooltip title="Add">
        <IconButton aria-label="add" onClick={handleClickOpen}>
          <AddIcon />
        </IconButton>
      </Tooltip>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">New article</DialogTitle>
        <DialogContent>
          <DialogContentText>Demo add item to react table.</DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            label="Title"
            type="text"
            fullWidth
            value={user.title}
            onChange={handleChange('title')}
          />
          <TextField
            margin="dense"
            label=""
            type="date"
            fullWidth
            value={user.published}
            onChange={handleChange('published')}
          />
          <TextField
            margin="dense"
            label="Site"
            type="text"
            fullWidth
            value={user.site}
            onChange={handleChange('site')}
          />
          <TextField
            margin="dense"
            label="Ad group"
            type="text"
            fullWidth
            value={user.adGroup}
            onChange={handleChange('adGroup')}
          />
          <TextField
            margin="dense"
            float="left"
            label="Bids"
            type="number"
            value={user.bids}
            onChange={handleChange('bids')}
          />
          <TextField
            margin="dense"
            float="left"
            label="Spending"
            type="number"
            value={user.spending}
            onChange={handleChange('spending')}
          />
          <TextField
              margin="dense"
              float="left"
              label="Win rate"
              type="number"
              value={user.winRate}
              onChange={handleChange('winRate')}
          />
          <TextField
              margin="dense"
              float="left"
              label="Impressions"
              type="number"
              value={user.impressions}
              onChange={handleChange('impressions')}
          />
          <TextField
              margin="dense"
              float="left"
              label="Clicks"
              type="number"
              value={user.clicks}
              onChange={handleChange('clicks')}
          />
          <TextField
              margin="dense"
              float="left"
              label="CTR"
              type="number"
              value={user.ctr}
              onChange={handleChange('ctr')}
          />
        </DialogContent>
        <DialogActions>
          <Tooltip title="Add multiple">
            <Switch
              checked={switchState.addMultiple}
              onChange={handleSwitchChange('addMultiple')}
              value="addMultiple"
              inputProps={{ 'aria-label': 'secondary checkbox' }}
            />
          </Tooltip>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleAdd} color="primary">
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

AddUserDialog.propTypes = {
  addUserHandler: PropTypes.func.isRequired,
}

export default AddUserDialog
