# Changelog
All notable changes to this project will be documented in this file.

## [1.0.0] - 2018-06-26
- Deploy of the first version of the website
    - Common elements
        - Navigation Bar
            - "xMorfina" redirects to Home Page
            - "Designs" redirects to Home Page
            - "Contact" redirects to Contact Page
    - Home Page
        - Search designs by tags
            - The user can write multiple tags (case-insensitive) separated by semicolon
                - A design is shown if at least one of user tags matche the design tags
            - Data is fetched from a mock
            - Data is then ordered by date (most recents at the top)
        - Design showcase
            - Every design is clickable and previews:
                - Magnified design
                - Title
                - Tags
                - "Contact Me": a new tab is open and the user is redirected to xMorfina Facebook page
    - Contact Page
        - "About section", contains information about xMorfina
        - "Commission section", contains information about how to contact xMorfina
            - Clicking "Facebook Page", a new tab is open and the user is redirected to xMorfina's Facebook page
        - "Collaborations", contains the list of xMorfina's collaborators as logo icon
            - Every icon can be clicked to open the relative collaborator website
            - Collaborator data is fetched by mock

        