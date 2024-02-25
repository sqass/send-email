npx cypress run --reporter mochawesome --reporter-options reportDir="cypress/results",overwrite=false,html=false,json=true

npx mochawesome-merge "cypress/results/*.json" -o mochawesome.json

npx marge mochawesome.json

