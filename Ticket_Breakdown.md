# Ticket Breakdown
We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**


Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".


You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here
***1. A Facility should be able to add custom id for the agents they are associated with, in the platform.***

**Acceptance Criteria:**
1. Custom Id field is added to agent details in the platform
2. Facilites can enter & save the agent's custom id.
3. The agents's custom id is available for reference in the agent details section as 	given by the Facility.
4. Custom Id of an agent associated with the facility should not shown to other facilities if the same agent is working along with other facilities.

**Implementation & time/effort estimates:**
1. UI/UX prototype design - 4 hours.
2. Field addition in the UI- 3 hours.
3. Creation of table to maintain the mapping between internal database id & custom id- 8 hours(An agent can be associated with multiple facilities, different custom id given by each facilities for the same agent should be maintained ).
4. API changes to add the field- 6 hours.
5. Write/Modify test cases- 8 hours.
6. Hosting changes- 2 hours.

***A facility should be able to generate report by custom agent id for the use of agents from the platform***

**Acceptance Criteria:**
1. Custom Ids search query is available for generation of reports.
2. Only the Agents data with the given custom Id is shown in the report.

**Time/effort estimates:**
1. Report structure requirement understanding(Considered as new report)- 8 hours
2. UI/UX prototype design- 8 hours
3. Frontend development - 24 hours
4. API function to generate report- 16 hours
5. Writing test case- 8 hours
6. Hosting changes- 2 hours

**Implementation:(**Considering the previous ticket is closed)
1. The functional understanding on report structure & design discussion can happen as one. Iterations can be done at the same time
2. Frontend & Api development can start parallely.Once the API development is complete the details are provided to Frontend team
3. Write test cases based on acceptance criteria
4. Hosting changes