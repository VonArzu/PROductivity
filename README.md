# PROductivity
# PROJECT 2 README <!-- omit in toc -->

- [Project Planning](#Project-Planning)
  - [Overview](#Overview)
  - [Wireframes](#Wireframes)
  - [MVP](#MVP)
    - [Goals](#Goals)
    - [Libraries](#Libraries)
    - [Data](#Data)
    - [Component Hierarchy](#Component-Hierarchy)
    - [Component Breakdown](#Component-Breakdown)
    - [Component Estimates](#Component-Estimates)
    - [Helper Functions](#Helper-Functions)
  - [Post-MVP](#Post-MVP)
- [Project Delivery](#Project-Delivery)
  - [Code Showcase](#Code-Showcase)
  - [Code Issues & Resolutions](#Code-Issues--Resolutions)

## Project Planning

> The Project Planning section should be completed for your project pitch with instructors.
>
> To ensure correct Markdown, I recommend cloning this wiki and copy/pasting the raw template code.

<br>

### Overview

_**PROductivity** is an elite personal productivity app including daily task to log , New to-dos to add to daily task, and resources consisting of budget help, books, credit help, and overall help.

<br>

### Wireframes

> Use the Wireframes section to display desktop, tablet and mobile views.

- Desktop

! https://drive.google.com/file/d/14C7C7pvSaCFy_IUGBptHDiHwa8cg0Ydn/view?usp=sharing 

- Tablet 

! https://drive.google.com/file/d/1B9OiWKrW9-NLVLWafVM6YFLpbXBGjEti/view?usp=sharing 

- Mobile 

! https://drive.google.com/file/d/1vwETSi3Pr5jsoUvXblYQhZrcSBQxuKMv/view?usp=sharing


<br>

### MVP

> CRUD format with simple Layout, at least 6 components, and a react router. Followed by  mobile,tablet, and desktop mode with minor styling.

_The **PROductivity** app

<br>

#### Goals

- Crud complete with in first 2 days
- Simple design layout
- Complete for all devices
- Post MVP update in styling
- post mvp add ecommerce itenararies, like, upgrade membership w/fee

<br>

#### Libraries

> Use this section to list all supporting libraries and their role in the project.

|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|   React Router   |  Routing links and pages
|   Axios          |  Pulling Air table API key
| Reacts-Bootstrap |  Styling cards for resources


<br>

#### Data

> Use the Data Section to define the API(s) you will be consuming for your project, inluding sample URL queries.

|    API     | Quality Docs? | Website       | Sample Query                            |
| :--------: | :-----------: | :------------ | :-------------------------------------- |
| AirtableAPI|   yes | https://airtable.com/ | https://api.airtable.com/v0/app2aFIfy94WFful9/Table%201/recLXsRslsXAP7O80

<br>

#### Component Hierarchy

> Use this section to define your React components and the data architecture of your app.

```
src
|__ assets/
      |__ 
|__ components/ (Added Image links and Resources links)
      |__ App.js 
      |__ Home.js
      |__ Daily.js
      |__ DailyTask.js
      |__ ToDo.js
      |__ Dynamic Resource cards from bootstrap w/links
```

<br>

#### Component Breakdown

> Use this section to go into further depth regarding your components, including breaking down the components as stateless or stateful, and considering the passing of data between those components.

|  Component   |    Type    | state | props | Description                                                      |
| :----------: | :--------: | :---: | :---: | :--------------------------------------------------------------- |
|    Header    | functional |   n   |   y   | _The header will link to the home page of current To-Dos & Daily Task|
|  Daily Task  | class      |   y   |   y   | _The Task will render the post info via props & state            |
|   To-Do's    | class      |   y   |   y   | _The To-do's will render the posts via props & state             |
|  Resources   | functional |   n   |   n   | _The blocks will render the post that wont change                |
|  add button  | functional |   y   |   n   | _Buttons will create a post                                      |
| delete button| functional |   y   |   n   | _Buttons will delete a post                                      |

<br>

#### Component Estimates

> Use this section to estimate the time necessary to build out each of the components you've described above. 
>
> Time frames are key to the development cycle. You have limited time to code your app, and your estimates can then be used to evalute possibilities of your MVP and post-MVP based on time needed. It's best you assume an additional hour for each component, as well as a few hours added to the total time, to play it safe.

| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| Simple Layout       |    H     |     5 hrs      |      hrs     |     TBD     |
| Create Actions      |    H     |     3 hrs      |      hrs     |     TBD     |
| Read Actions        |    H     |     3 hrs      |      hrs     |     TBD     |
| Update Actions      |    H     |     3 hrs      |      hrs     |     TBD     |
| Delete Actions      |    H     |     3 hrs      |      hrs     |     TBD     |
| Device compatability|    L     |     5 hrs      |      hrs     |     TBD     |
| CSS for styling     |    L     |     3 hrs      |      hrs     |     TBD     |
| TOTAL               |          |     25 hrs     |      hrs     |     TBD     |

<br>

#### Helper Functions

> Use this section to document all helper functions– generic functions that can be reused in other applications.

|  Function  | Description                                |
| :--------: | :----------------------------------------- |
| Add To-Do    | Creates a task on home page|
| Delete       | Deletes a task on home page|

<br>

### Post-MVP

> Use this section to document ideas you've had that would be fun (or necessary) for your Post-MVP. This will be helpful when you return to your project after graduation!

- Indepth CSS for styling (Completed)
- Add PRO membership SELECTIONS FOR 8.99 a month
- Add add check out, cart, and new membership monthly account


<br>

***

## Project Delivery

### Code Showcase

> I am proud of using React-Boostrap library because It was self-taught. I am also proud to get introduced to a new way to create a delete button. 
> I am proud of the projects purpose and the amount of people it will help starting with myself

### Code Issues & Resolutions

> I did not know how to make the cards grid view and fixed it in CSS
> I did not know how to make the cards contain links to resources and added new code with help
> I did not know how to seperate description of task with adding task and seprated each with help

