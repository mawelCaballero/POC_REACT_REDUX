# How to resolve in REACT REDUX FWK a real user case

## Scenario Description

Let's imagine one screen witch an input type text. Updating it , other property becomes non editable (use of modified headers)
- Describe the components involved to handle the screen/scenario
- Describe the sequence of actions executed
- React actions, reducers



## Components involded to handle screen/scenario

These are the components involved in this scenario.
An user is going to type some value in one of the property Components and it's going to throw a dispatch event because we are modifying the value. In this momment, an action is going to comunicate with the API. In the patch response, we'll load properties resource of state but in the same time, we'll check if the response contains modifiedHeaders.
In this case, we'll communicate with the API and if the communication is success, reducer will return the state with the new property resource. For finishing, once properties resource from state is finished and loaded, transform data view (Data from view component) will be proccesed and the view data component will be updated.

<div style="text-align:center; padding-bottom:15px">
  <img src="https://drive.google.com/uc?id=0B4Y8n9rDTStjSHVaSi1qLWk0OW8">
</div>


-  **View**. Provide components with the following nested structure:
  - View / Section / Property: data is provided in the state and modified by reducers
-  **Action**. When a property component triggers an onChange event, action gets data and dispatch the event which will be managed by reducer.
-  **Reducer**. It's based on functional programming. It will recieve the action data and it will manage the logic to return a new reference of the state.
-  **API**. third party for connecting with external api's.
