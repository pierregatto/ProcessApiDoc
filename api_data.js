define({ "api": [
  {
    "type": "post",
    "url": "/processes",
    "title": "Request Process Creation",
    "name": "CreateProcess",
    "group": "Process",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>name of the process.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>description of the process.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "ProcessId",
            "description": "<p>Process's parent id</p>"
          },
          {
            "group": "Parameter",
            "type": "User",
            "optional": false,
            "field": "User",
            "description": "<p>Process's creator.</p>"
          },
          {
            "group": "Parameter",
            "type": "Step[]",
            "optional": false,
            "field": "steps",
            "description": "<p>Process's steps.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "201": [
          {
            "group": "201",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>process's id.</p>"
          },
          {
            "group": "201",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>name of the process.</p>"
          },
          {
            "group": "201",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>description of the process.</p>"
          },
          {
            "group": "201",
            "type": "Number",
            "optional": false,
            "field": "rate",
            "description": "<p>Process's rate.</p>"
          },
          {
            "group": "201",
            "type": "Number",
            "optional": false,
            "field": "ProcessId",
            "description": "<p>Process's parent id</p>"
          },
          {
            "group": "201",
            "type": "Number",
            "optional": false,
            "field": "UserId",
            "description": "<p>Process's creator.</p>"
          },
          {
            "group": "201",
            "type": "Date",
            "optional": false,
            "field": "createdAt",
            "description": "<p>creation date</p>"
          },
          {
            "group": "201",
            "type": "Date",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>update date</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/api/processes/index.js",
    "groupTitle": "Process"
  },
  {
    "type": "delete",
    "url": "/processes/:processId",
    "title": "Request Process Deletion",
    "name": "DeleteProcess",
    "group": "Process",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Processes unique ID.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/api/processes/index.js",
    "groupTitle": "Process"
  },
  {
    "type": "get",
    "url": "/processes/:processId",
    "title": "Request Process Information",
    "name": "GetProcess",
    "group": "Process",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Processes unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>process's id.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>name of the process.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>description of the process.</p>"
          },
          {
            "group": "Success 200",
            "type": "Step[]",
            "optional": false,
            "field": "steps",
            "description": "<p>Process's steps</p>"
          },
          {
            "group": "Success 200",
            "type": "Vote[]",
            "optional": false,
            "field": "votes",
            "description": "<p>Process's votes</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "rate",
            "description": "<p>Process's rate.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "ProcessId",
            "description": "<p>Process's parent id</p>"
          },
          {
            "group": "Success 200",
            "type": "User",
            "optional": false,
            "field": "User",
            "description": "<p>Process's creator.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "createdAt",
            "description": "<p>creation date</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>update date</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/api/processes/index.js",
    "groupTitle": "Process"
  },
  {
    "type": "get",
    "url": "/processes",
    "title": "Request Processes List",
    "name": "GetProcesses",
    "group": "Process",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Process[]",
            "optional": false,
            "field": "processes",
            "description": "<p>List of Processes</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/api/processes/index.js",
    "groupTitle": "Process"
  },
  {
    "type": "post",
    "url": "/searches/processes",
    "title": "Request Processes Research",
    "name": "ResearchProcesses",
    "group": "Process",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "keywords",
            "description": "<p>research keywords.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Process[]",
            "optional": false,
            "field": "processes",
            "description": "<p>Processes matching the keywords</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/api/searches/index.js",
    "groupTitle": "Process"
  },
  {
    "type": "put",
    "url": "/processes/:processId",
    "title": "Request Process Update",
    "name": "UpdateProcess",
    "group": "Process",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Processes unique ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>name of the process.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>description of the process.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "ProcessId",
            "description": "<p>Process's parent id</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "UserId",
            "description": "<p>Process's creator.</p>"
          },
          {
            "group": "Parameter",
            "type": "Step[]",
            "optional": false,
            "field": "steps",
            "description": "<p>Process's steps.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>process's id.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>name of the process.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>description of the process.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "rate",
            "description": "<p>Process's rate.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "ProcessId",
            "description": "<p>Process's parent id</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "UserId",
            "description": "<p>Process's creator.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "createdAt",
            "description": "<p>creation date</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>update date</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/api/processes/index.js",
    "groupTitle": "Process"
  },
  {
    "type": "get",
    "url": "/processes/:processId/steps/:stepId",
    "title": "Request Steps Information",
    "name": "GetStep",
    "group": "Step",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Processes unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>step's id.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "stepName",
            "description": "<p>name of the process.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "stepDescription",
            "description": "<p>description of the process</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "ProcessId",
            "description": "<p>step's process id</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "isMult",
            "description": "<p>true if is a multiple step</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "index_number",
            "description": "<p>step's position</p>"
          },
          {
            "group": "Success 200",
            "type": "Response[]",
            "optional": false,
            "field": "responses",
            "description": "<p>Step's responses</p>"
          },
          {
            "group": "Success 200",
            "type": "Reference[]",
            "optional": false,
            "field": "references",
            "description": "<p>Step's references</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "createdAt",
            "description": "<p>creation date</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>update date</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/api/processes/steps/index.js",
    "groupTitle": "Step"
  },
  {
    "type": "get",
    "url": "/processes/:processId/steps",
    "title": "Request Step List",
    "name": "GetSteps",
    "group": "Step",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Processes unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Step[]",
            "optional": false,
            "field": "steps",
            "description": "<p>List of Steps</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/api/processes/steps/index.js",
    "groupTitle": "Step"
  },
  {
    "type": "put",
    "url": "/processes/:processId/steps/:stepId",
    "title": "Request Step Update",
    "name": "UpdateStep",
    "group": "Step",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "processId",
            "optional": false,
            "field": "id",
            "description": "<p>Processes unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "stepName",
            "description": "<p>name of the process.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "stepDescription",
            "description": "<p>description of the process.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "isMult",
            "description": "<p>true if is a multiple step</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "index_number",
            "description": "<p>step's position.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>step's id.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "ProcessId",
            "description": "<p>step's process id.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "createdAt",
            "description": "<p>creation date</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>update date</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/api/processes/steps/index.js",
    "groupTitle": "Step"
  },
  {
    "type": "post",
    "url": "/users",
    "title": "Request User Creation",
    "name": "CreateUser",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "firstname",
            "description": "<p>user's firstname.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "lastname",
            "description": "<p>user's lastname.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "201": [
          {
            "group": "201",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>user's id.</p>"
          },
          {
            "group": "201",
            "type": "String",
            "optional": false,
            "field": "firstname",
            "description": "<p>user's firstname.</p>"
          },
          {
            "group": "201",
            "type": "String",
            "optional": false,
            "field": "lastname",
            "description": "<p>user's lastname.</p>"
          },
          {
            "group": "201",
            "type": "Date",
            "optional": false,
            "field": "createdAt",
            "description": "<p>creation date</p>"
          },
          {
            "group": "201",
            "type": "Date",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>update date</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/api/users/index.js",
    "groupTitle": "User"
  },
  {
    "type": "delete",
    "url": "/users/:userId",
    "title": "Request User Deletion",
    "name": "DeleteUser",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Users unique ID.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/api/users/index.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/users/:userId",
    "title": "Request User Information",
    "name": "GetUser",
    "group": "User",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>user's id.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "firstname",
            "description": "<p>user's firstname.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "lastname",
            "description": "<p>user's lastname.</p>"
          },
          {
            "group": "Success 200",
            "type": "Vote[]",
            "optional": false,
            "field": "votes",
            "description": "<p>User's vote.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "createdAt",
            "description": "<p>creation date</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>update date</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/api/users/index.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/users/:userId/processes",
    "title": "Request User's Processes",
    "name": "GetUserProcesses",
    "group": "User",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Process[]",
            "optional": false,
            "field": "processes",
            "description": "<p>List of Processes.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/api/users/index.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/users",
    "title": "Request Users List",
    "name": "GetUsers",
    "group": "User",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "User[]",
            "optional": false,
            "field": "users",
            "description": "<p>List of Users.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/api/users/index.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/users/:userId/votes",
    "title": "Request Vote Creation",
    "name": "CreateVote",
    "group": "Vote",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "UserId",
            "description": "<p>Users unique ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "vote",
            "description": "<p>true if up false if down.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "ProcessId",
            "description": "<p>Process's id.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "201": [
          {
            "group": "201",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>vote's id.</p>"
          },
          {
            "group": "201",
            "type": "Boolean",
            "optional": false,
            "field": "vote",
            "description": "<p>true if up false if down.</p>"
          },
          {
            "group": "201",
            "type": "Number",
            "optional": false,
            "field": "ProcessId",
            "description": "<p>Process's id.</p>"
          },
          {
            "group": "201",
            "type": "Number",
            "optional": false,
            "field": "UserId",
            "description": "<p>User's id.</p>"
          },
          {
            "group": "201",
            "type": "Date",
            "optional": false,
            "field": "createdAt",
            "description": "<p>creation date</p>"
          },
          {
            "group": "201",
            "type": "Date",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>update date</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/api/users/votes/index.js",
    "groupTitle": "Vote"
  },
  {
    "type": "get",
    "url": "/users/:userId/votes",
    "title": "Request User's Votes List",
    "name": "GetVotes",
    "group": "Vote",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "UserId",
            "description": "<p>Users unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Vote[]",
            "optional": false,
            "field": "votes",
            "description": "<p>User's Votes</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/api/users/votes/index.js",
    "groupTitle": "Vote"
  },
  {
    "type": "put",
    "url": "/users/:userId/votes/:VoteId",
    "title": "Request Vote Update",
    "name": "UpdateVote",
    "group": "Vote",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "UserId",
            "description": "<p>Users unique ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "VoteId",
            "description": "<p>Votes unique ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "vote",
            "description": "<p>true if up false if down.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "ProcessId",
            "description": "<p>Process's id.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>vote's id.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "vote",
            "description": "<p>true if up false if down.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "ProcessId",
            "description": "<p>Process's id.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "UserId",
            "description": "<p>User's id.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "createdAt",
            "description": "<p>creation date</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>update date</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/api/users/votes/index.js",
    "groupTitle": "Vote"
  }
] });
