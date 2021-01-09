Cypress run  :

   yarn cypress run
 or 
   yarn cypress open

(or using npx instead of yarn)

Reference links : 

1. https://basarat.gitbook.io/typescript/intro-1/cypress

2. https://docs.cypress.io/guides/references/best-practices.html

Reference Info : 
3. https://www.toolsqa.com/cypress/cypress-locators/
   (Only supports css selectors -- jquery like (Select by Id, Class, Attribute, subString, inner text)

   4. Visual testing :  https://docs.percy.io/docs/cypress  and Applitools (eyes)

   5.  https://basarat.gitbook.io/typescript/intro-1/cypress

4.  https://github.com/cypress-io/code-coverage

5. Real examples : 
   https://github.com/cypress-io/cypress-realworld-app/blob/develop/cypress/tests/ui/bankaccounts.spec.ts

   cypress : should with function (customized assertion)
             customized command with retry or using pip to in test for customized command with retry : 
             https://glebbahmutov.com/blog/cypress-should-callback/
             https://www.npmjs.com/package/cypress-pipe

5. Test Strategy : 
   https://docs.cypress.io/guides/getting-started/testing-your-app.html#Logging-in

   more examples : 

   https://github.com/cypress-io/cypress-example-recipes/tree/master/examples/testing-dom__csv-table

   https://onesoftwaretester.wordpress.com/2018/03/20/cypress-stubbing-network-requests-with-cy-route/

6. visual tests : (See top)

    https://www.freecodecamp.org/news/how-to-add-screenshot-testing-with-cypress-to-your-project/

    (eyes/applitools, percy, other 3rd party/customized visual tests)

7.  testing library : 
    https://testing-library.com/docs/cypress-testing-library/intro


Specific topics : touch 

1.  Configurations : 
 
     https://docs.cypress.io/guides/references/configuration.html#Resolved-Configuration


TypeScript Tips :  exercises typescripts

1. tsc -p ./tsconfig.json --listFiles
   Find out types used
