udemy jest + enzyme testing course

npm test will just run jest in create-react-app
jest won't test anything that hasn't been changed again 

also, create-react-app auto creates git and inits 

TYPES OF TESTS 
1. Unit tests 
    a. tests one piece of code (usually one function) 
2. Integration tests 
    a. How multiple tests work together 

(Bigger packages won't cover here)
3. Acceptance / End-to-end 
    a. how users would interact with the app 


1. Test BEHAVIOR, not IMPLEMENTATION 
(Test WHAT it should do, not HOW it does it)
Or else you're going to have to change the test when you change how you're going to tackle the code 

EXAMPLE
    BEHAVIOR 
        set initial state,
        simulate button click 
        check display count is incremented 
    IMPLEMENTATION 
        set intial state
        simulate button click 
        check if the right function was called 

JUST CHECK END RESULT 

2. Easy diagnosis of failing tests 
ex: shopping cart of t-shirt 
- style, size, color etc 
    DIFFICULT would check contents of the entire cart 
    EASY would check each item that can be adjusted 

Make it super easy to figure out why a test failed 

EASY vs BEHAVIOR is opposing but you have to balance between checking the two because behavior means less tests but easy means its faster to figure out a problem 


There's no way to do snapshot tesitng with TDD 
snapshots are a bit brittle and will break the test a lot and they are 'difficult' tests. they're more like small fixes during updates because there's no intent, it's really more like a hotfix for an individual programmer rather than a TDD approach which is starting from the beginning and building up to something as a group 

