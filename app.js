const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const db = require('./queries')
const port = 3000

app.use(bodyParser.json())

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.post('/fi', db.insertfi)
app.post('/loan', db.insertloan)
app.post('/loan_detail', db.insertloan_detail)
app.post('/address', db.insertaddress)
app.post('/loan_detail_borrower', db.insertloan_detail_borrower)
app.post('/loan_detail_collateral', db.insertloan_detail_collateral)
app.post('/opportunity', db.insertopportunity)
app.post('/opportunity_document', db.insertopportunity_document)
app.post('/opportunity_document_content_type', db.insertopportunity_document_content_type)
app.post('/opportunity_document_type', db.insertopportunity_document_type)
app.post('/opportunity_tag',db.insertopportunity_tag)
app.post('/deal', db.insertdeal)
app.post('/deal_participant', db.insertdeal_participant)
app.post('/transfer', db.inserttransfer)
app.post('/disbursement', db.insertdisbursement)
app.post('/disbursement_money_status', db.insertdisbursement_money_status)
app.post('/message', db.insertmessage)


app.listen(3000, () => {
  console.log(`Server is running.`);
});
