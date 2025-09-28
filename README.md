How did event.preventDefault() help in handling form submission?
preventDefault()function stops the default submit action. As its a static single page, it helped preventing the form to get submitted.
What is the difference between using HTML5 validation attributes and JavaScript-based validation? Why might you use both?
HTML5 validation is a default validation option with few details in it. While using JavaScript validation we customize the errors in detail. So the user can understand better.
Explain how you used localStorage to persist and retrieve the username. What are the limitations of localStorage for storing sensitive data?
Using the setItem with  key and value is set to the local storage and can be retrieved using getItem with the key. 
If it has cross site script vulnerability in our site malicious scripts injected into the page can read, modify, or delete any data in web storage.This data could be compromised if an XSS attack occurs.
Describe a challenge you faced in implementing the real-time validation and how you solved it.
A challenge I would say is the validation type for each input. The mdn was helpful to verify which validation should be used for the particular input.
How did you ensure that custom error messages were user-friendly and displayed at the appropriate times?
In HTML5 even though it has default validation option, the information is not enough for the user. For example, it just displays input is invalid, but the user will not know why it is invalid.
So the custom error message is helpful at that time. So we can use the setCustomValidity method to give the details error message saying "Please enter username. It cannot be empty."
