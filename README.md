# WOOF WOOF WELCOME TO DOGGO BARK BARK

THIS GOOD APPLICATION FOR LOOKING AT DOGS BOW WOW

WHEN LOOKING AT PUP PUPS USER SHOULD BE ABLE TO:
 - CLICK ON DOGS IN THE DOG BAR TO SEE MORE INFO ABOUT THE GOOD PUPPER
   - MORE INFO INCLUDES A DOG PIC, A DOG NAME, AND A DOG BUTTON THAT INDICATES
     WHERE IT IS A GOOD DOG OR A BAD DOG
 - CLICK ON GOOD DOG/BAD DOG BUTTON IN ORDER TO TOGGLE PUP GOODNESS



### STEP 1: ADD PUPS TO DOG BAR
On the page, there is a div with the id of "dog-bar". On page load, make a fetch
to get all of the pup objects. When you have this information, you'll need to add
a span with the pup's name to the dog bar (ex: <span>Mr. Bonkers</span>).

### STEP 2: SHOW MORE INFO ABOUT EACH PUP
When a user clicks on a pup's span in the dog bar, that pup's info (image, name, and isGoodDog status) should show up in the div with the id of "dog-info".
When you have the pup's information, the dog info div should have the following children:
 - an img tag with the pup's image url
 - an H2 with the pup's name
 - a button that says "Good Dog!" or "Bad Dog!" based on whether isGoodDog is true or false.
 Ex:
 ```
  <img src=dog_image_url>
  <h2>Mr. Bonkers</h2>
  <button>Good Dog!</button>
 ```

### STEP 3: TOGGLE GOOD DOG
 When a user clicks the Good Dog/Bad Dog button, two things should happen:
  - The button's text should change from Good to Bad or Bad to Good
  - The corresponding pup object in the database should be updated to reflect the new isGoodDog value
    - Please note, you can update a dog by making a PATCH request to /pups/:id
