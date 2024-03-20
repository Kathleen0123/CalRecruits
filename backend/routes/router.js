const express = require('express')
const router = express.Router()
const schemas = require('../models/schemas')

router.post('/addclub/:a', async(req, res) => {
  const {email, name, shortMsg, longMsg, deadline} = req.body
  const action = req.params.a
  
  switch(action) {
    case "send":
      const clubData = {email: email, name: name, shortMsg: shortMsg, longMsg: longMsg, deadline: deadline}
      const newClub = new schemas.Clubs(clubData)
      const saveClub = await newClub.save()
      if (saveClub) {
        res.send('Request sent. Thank you.')
      } else {
        res.send('Failed to send request.')
      }
      break;

      default:
        res.send('Invalid Request')
        break
  }

  res.end()
})

router.post('/signup/:a', async(req, res) => {
  const {name, email, password, type} = req.body
  const action = req.params.a
  
  switch(action) {
    case "send":
      const userData = {name: name, email: email, password: password, type:type}
      const newUser = new schemas.Users(userData)
      const saveUser = await newUser.save()
      if (saveUser) {
        res.send('You are registered. Thank you.')
      } else {
        res.send('Failed to register.')
      }
      break;

      default:
        res.send('Invalid Request')
        break
  }

  res.end()
})

router.post('/signin/:a', async(req, res) => {
  const {email} = req.body
  const action = req.params.a
  
  switch(action) {
    case "send":
      const signinData = {email: email}
      const newSignin = new schemas.Signin(signinData)
      const saveSignin = await newSignin.save()
      if (saveSignin) {
        res.send('You are signed in. Thank you.')
      } else {
        res.send('Failed to sign in.')
      }
      break;

      default:
        res.send('Invalid Request')
        break
  }

  res.end()
})

router.get('/users', async (req, res) => {
  const users = schemas.Users
  const userData = await users.find({}).exec()
  if (userData) {
    res.send(JSON.stringify(userData))
  }
})

router.get('/clubs', async (req, res) => {
  const clubs = schemas.Clubs
  const clubsData = await clubs.find({}).exec()
  if (clubsData) {
    res.send(JSON.stringify(clubsData))
  }
})

module.exports = router
