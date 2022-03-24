# Project REST-Rant

Rest-Rant is an app where users can review restuarants.

## PLANNING
1.  Writing user stories:
-   Fill in blanks * As a __(user type)__ I need __(feature)__ so I can __(action)__

2.  Draw wireframes:
-   Can be electronic or on paper, complex or simple.

3.  Choose Color Scheme:
-   At least 3 colors: A primary, a secondary, and a highlight color.

## TABLE ROUTES
|   Method      |               Path                    |   Purpose     |
|   ---      |   ---      |   ---    |
|    GET        |    /                                  |   Home page   |
|    GET        |    /places                            |   Places index page   |
|   POST        |    /places                            |   Create new page   |
|    GET        |    /places/new                        |   For page for creating a new place   |
|    GET        |    /places/:id                        |   Details about a particular place   |
|    PUT        |    /places/:id                        |   Update a particular place   |
|    GET        |    /places/:id/edit                   |   Form page for editing an existing place   |
|   DELETE      |    /places/:id                        |   Delete a particular place   |
|   POST        |    /places/:id/edit/rant              |   Create a rant (comment) about a particular place   |
|   DELETE      |    /places/:id/edit/rant/:rantId      |   Delete a rant (comment) about a particular place  |
|    GET        |               *                       |   404 page (matches any route not defined above)   |

## PLACES
|   Field     |   Type         |
|   ---       |   ---          |
|   id        |                |
|   name      |   string       |  
|   city      |   string       |
|   state     |   string       |  
|   cuisines  |   string       |
|   pic       |   string(URL)  |