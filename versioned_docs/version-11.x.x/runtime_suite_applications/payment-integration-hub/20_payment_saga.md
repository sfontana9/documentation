---
id: payment_saga
title: Payment Saga
sidebar_label: Payment Saga
---
The Payment Integration Hub application includes a [Flow Manager Service](../../runtime_suite/flow-manager-service/overview) in order to manage the **payment** life-cycle. 

Leveraging the flexibility of the Flow Manager the application provides a ready to use saga with all the states and commands needed in order to successfully perform a payment and eventually any refund related to that. This saga can be modified as desired to meet specific requirements. 

## Default Configuration
The default configuration of the payment saga is described in the image below:

![Machine Definition](img/machine-definition-v3.1.png)

### Business States
The business states of the saga describe the overall state of the payment, ignoring the technical status of the system:
- **PAYMENT_CREATED**: the payment is created and the system is still collecting payment-related information (e.g., the payment method to be used) or is waiting for the provider's response
- **PAYMENT_PAID**: the payment was paid and was completed by the provider
- **PAYMENT_FAILED**: the payment has failed
- **PAYMENT_PARTIALLY_REFUNDED**: the payment was partially refunded
- **PAYMENT_TOTALLY_REFUNDED**: the payment was totally refunded


### Technical States
The technical states of the saga describe all the necessary steps to perform payment-related actions:
- **PAYMENT_CREATED**: the payment was created but some information are missing
- **AUTHORIZATION_REQUESTED**: some authorization is needed from the user
- **AUTHORIZATION_PENDING**: some authorization is being performed
- **LINK_REQUESTED**: the creation of the link for a `PAY_BY_LINK` payment has been requested
- **LINK_CREATED**: the link for a `PAY_BY_LINK` payment has been created
- **PAYMENT_SCHEDULE_REQUESTED**: a request was sent to the provider in order to create a new payment
- **SUBSCRIPTION_SCHEDULED_REQUESTED**: a request was sent to the provider in order to create the first payment for a fully managed subscription
- **SUBSCRIPTION_STARTED**: a request was sent to the provider in order to create the first payment for a subscription
- **SUBSCRIPTION_PAYMENT_REQUESTED**: a request was sent to the provider in order to create a subsequent payment for subscription
- **PAYMENT_PENDING**: the payment was created by the provider but some actions are needed from the final user or the system is simply waiting for a callback
- **PAYMENT_EXECUTED**: the payment was paid successfully
- **REFUND_REQUESTED**: a refund was requested and no other refunds were performed previously
- **REFUND_FAILED**: the refund request failed
- **PARTIALLY_REFUNDED**: a partial refund was performed on the payment
- **SUBSEQUENT_REFUND_REQUESTED**: a refund was requested
- **SUBSEQUENT_REFUND_FAILED**: the refund request failed
- **TOTALLY_REFUNDED**: the payment was totally refunded
- **PAYMENT_FAILED**: the payment failed

### Actors
The microservices that interact with the payment saga are the following:
- **Payment Gateway Manager**: receive all the commands needed to perform relevant actions and sent events regarding the outcome of the payment
- **Subscription Handler**: send request for the creation of new payment related to a subscription
- **Payment BFF**: create a new payment requested from a frontend application
- **Frullino Service** triggers the events of `paymentExecutedByTheSystem` and `paymentFailedByTheSystem` and automatically update payment status

## CRUD Collection

A *transactions_saga* collection will be included in the project and by default is used as database reference use to retrieve payments information.
The application can use any MongoDB collection to retrieve payments information: for further details on how to configure the application refer to the dedicated [section](./50_configuration.md).
The following schema is used in the collection, designed to be compatible with [payment gateway manager](../../runtime_suite/payment-gateway-manager/overview):
- **sagaId**: the unique saga id of payment flow
- **isFinal**: boolean to indicate if a state is final or not
- **metadata**: object with information related to the payment
    - **paymentId**: payment transaction id as returned by the provider
    - **shopTransactionId**: the unique id of your transaction
    - **amount**: amount of the transaction as an integer
    - **currency**: currency of the transaction in [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217)
    - **provider**: provider used for the payment
    - **paymentMethod**: payment method used
    - **type**: type of the transaction. It can be `SUBSCRIPTION`, `DIRECT` or `PAY_BY_LINK`
    - **payRequestData**: object with the data related to the payment request
        - **subscriptionInfo**: object with information related to the recurrence of the payment
    - **link**: link to the payment page if type is `PAY_BY_LINK`
    - **refundRequestData**: object with the data related to the refund request
    - **refundDetails**: object with the data related the refunded payment
    - **callbackHistory**: list of the callback body received by the provider, together with the timestamp
    - **subscriptionId**: the unique id of your subscription
    - **additionalData**: optional object to store data related to the payment
        - **buyer**:  object with buyer information
- **currentState**: state of the payment
- **latestEvent**: latest event emitted by the flow manager
- **associatedEntityId**: an entity identifier connected with the flow manager
- **events**: array with the history of events emitted
- **history**: object that contains the history of the payment (states and events)
- **businessStateId**: identifier of the business state
- **businessStateDescription**: description of the current business state