# Assignment-5
Difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll

document.getElementById("id")

শুধুমাত্র একটা element ফেরত দেয় (কারণ id ইউনিক হয়)।

সরাসরি element object ফেরত দেয় (HTMLCollection নয়)।

উদাহরণ:

let el = document.getElementById("myId");


document.getElementsByClassName("class")

একই ক্লাসের সব element ফেরত দেয়।

ফেরত দেয় HTMLCollection (array-এর মতো, কিন্তু সত্যিকারের array নয়)।

উদাহরণ:

let items = document.getElementsByClassName("myClass");


document.querySelector("selector")

CSS selector অনুযায়ী প্রথম matching element ফেরত দেয়।

উদাহরণ:

let el = document.querySelector(".myClass"); 


document.querySelectorAll("selector")

CSS selector অনুযায়ী সব matching element ফেরত দেয়।

ফেরত দেয় NodeList (array-এর মতো, forEach ব্যবহার করা যায়)।

উদাহরণ:

let items = document.querySelectorAll(".myClass"); 


👉 Summary:

getElementById → 1 element (id দিয়ে)।

getElementsByClassName → একাধিক element (HTMLCollection)।

querySelector → 1 element (CSS selector দিয়ে)।

querySelectorAll → একাধিক element (NodeList)।

2️⃣ How do you create and insert a new element into the DOM?

নতুন element তৈরি করা:

let newDiv = document.createElement("div");
newDiv.textContent = "Hello, I am new!";


DOM এ insert করা (appendChild / prepend / insertBefore / append):

document.body.appendChild(newDiv);          
document.body.prepend(newDiv);              
parent.insertBefore(newDiv, referenceNode); 
parent.append(newDiv, anotherElement);     

3️⃣ What is Event Bubbling and how does it work?

Event Bubbling হলো এমন একটি প্রক্রিয়া যেখানে event প্রথমে inner element-এ ঘটে, তারপর parent → grandparent → document পর্যন্ত যায়।

উদাহরণ:

<div id="parent">
  <button id="child">Click Me</button>
</div>

document.getElementById("parent").addEventListener("click", () => {
  console.log("Parent clicked");
});

document.getElementById("child").addEventListener("click", () => {
  console.log("Child clicked");
});


👉 যদি আপনি child button এ ক্লিক করেন:
Output হবে:

Child clicked
Parent clicked


(কারণ event parent এর দিকে bubble করে যায়)

4️⃣ What is Event Delegation in JavaScript? Why is it useful?

Event Delegation মানে হলো, child element গুলোতে আলাদা করে event listener না দিয়ে parent element এ একটাই listener দেওয়া, আর তারপর event bubbling ব্যবহার করে child কে identify করা।

উদাহরণ:

document.getElementById("list").addEventListener("click", function(e) {
  if (e.target.tagName === "LI") {
    console.log("You clicked:", e.target.textContent);
  }
});


* এখানে ul#list এ একটাই listener আছে, কিন্তু যেকোনো li তে ক্লিক করলে সেটা কাজ করবে।

কেন useful?

Dynamic elements (যা পরবর্তীতে DOM এ add হবে) এর জন্য কাজ করে।

অনেক child element থাকলে performance ভালো হয় (প্রতিটায় আলাদা listener না দিয়ে parent এ একটাই)।

5️⃣ Difference between preventDefault() and stopPropagation()

event.preventDefault()

Browser এর default behavior বন্ধ করে।

উদাহরণ:

document.querySelector("a").addEventListener("click", function(e) {
  e.preventDefault(); 
  console.log("Default action stopped");
});


event.stopPropagation()

Event bubbling (বা capturing) বন্ধ করে।

মানে event parent পর্যন্ত আর যাবে না।

উদাহরণ:

child.addEventListener("click", function(e) {
  e.stopPropagation(); // Parent listener ট্রিগার হবে না
  console.log("Child clicked only");
});
