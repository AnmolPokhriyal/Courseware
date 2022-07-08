"use strict";(self.webpackChunkcourseware=self.webpackChunkcourseware||[]).push([[9927],{1384:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var a=n(7462),i=(n(7294),n(3905)),r=n(9304);const l={},o=void 0,s={unversionedId:"docs/Front-end-development/FE0015",id:"docs/Front-end-development/FE0015",title:"FE0015",description:"Welcome to the lesson on Front-end web development. This would be a self-paced class that focuses on one of the fundamental topics in HTML - Text Fundamentals. Please make sure that you are completing the entire lesson.",source:"@site/Semester-1/docs/Front-end-development/FE0015.mdx",sourceDirName:"docs/Front-end-development",slug:"/docs/Front-end-development/FE0015",permalink:"/Courseware/Semester-1/docs/Front-end-development/FE0015",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Styling Lists",permalink:"/Courseware/Semester-1/docs/Front-end-development/FE0008"},next:{title:"The Box Model",permalink:"/Courseware/Semester-1/docs/Front-end-development/FE0019"}},p={},c=[{value:"What are your learning goals in this lesson",id:"what-are-your-learning-goals-in-this-lesson",level:2},{value:"Conflicting Rules",id:"conflicting-rules",level:2},{value:"What are Conflicting Rules?",id:"what-are-conflicting-rules",level:3},{value:"Cascade",id:"cascade",level:2},{value:"What is Cascade?",id:"what-is-cascade",level:3},{value:"Specificity",id:"specificity",level:2},{value:"What is Specificity?",id:"what-is-specificity",level:3},{value:"<strong>How is specificity calculated?</strong>",id:"how-is-specificity-calculated",level:4},{value:"Inheritance",id:"inheritance",level:2},{value:"What is Inheritance?",id:"what-is-inheritance",level:3},{value:"Understanding Inheritance",id:"understanding-inheritance",level:3},{value:"Controlling inheritance",id:"controlling-inheritance",level:3},{value:"<strong>What is Controlling inheritance?</strong>",id:"what-is-controlling-inheritance",level:4},{value:"Order of overriding declarations",id:"order-of-overriding-declarations",level:3},{value:"Organizing your CSS",id:"organizing-your-css",level:2},{value:"Why do we need to organize css?",id:"why-do-we-need-to-organize-css",level:4},{value:"Road map for better learning",id:"road-map-for-better-learning",level:2}],h={toc:c};function d(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Welcome to the lesson on Front-end web development. This would be a ",(0,i.kt)("strong",{parentName:"p"},"self-paced class")," that focuses on one of the fundamental topics in HTML - Text Fundamentals. Please make sure that you are completing the entire lesson."),(0,i.kt)("h1",{id:"cascade-and-inheritance"},"Cascade and inheritance"),(0,i.kt)("h2",{id:"what-are-your-learning-goals-in-this-lesson"},"What are your learning goals in this lesson"),(0,i.kt)("p",null,"Goal 1: Conflicting Rules "),(0,i.kt)("p",null,"Goal 2: Cascade, Inheritance and Specificity"),(0,i.kt)("p",null,"Goal 3: Organizing CSS"),(0,i.kt)("h2",{id:"conflicting-rules"},"Conflicting Rules"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://c.tenor.com/kiU7MKAIg1UAAAAM/i-hate-conflict-oj-simpson.gif",alt:null})),(0,i.kt)("p",null,"GIF link: ",(0,i.kt)("a",{parentName:"p",href:"https://c.tenor.com/kiU7MKAIg1UAAAAM/i-hate-conflict-oj-simpson.gif"},"https://c.tenor.com/kiU7MKAIg1UAAAAM/i-hate-conflict-oj-simpson.gif")),(0,i.kt)("h3",{id:"what-are-conflicting-rules"},"What are Conflicting Rules?"),(0,i.kt)("p",null,"According to ",(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance#conflicting_rules"},"MDN")," \u201cAt some point, you will be working on a project and find that the CSS you thought should be applied to an element is not working. Often, the problem is that you create two rules that apply different values of the same property to the same element. Cascade and the closely-related concept of specificity are mechanisms that control which rule applies when there is such a conflict. The rule that's styling your element may not be the one you expect, so you need to understand how these mechanisms work.\u201d"),(0,i.kt)("h2",{id:"cascade"},"Cascade"),(0,i.kt)("h3",{id:"what-is-cascade"},"What is Cascade?"),(0,i.kt)("p",null,"According to ",(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/CSS/Cascade"},"MDN"),", \u201cThe cascade is an algorithm that defines how user agents combine property values originating from different sources. The cascade defines the origin and layer that takes precedence when declarations in more than one origin or cascade layer set a value for a property on an element.\u201d"),(0,i.kt)("p",null,"According to ",(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/CSS/Cascade"},"MDN"),", \u201cThere are three factors to consider, listed here in increasing order of importance. Later ones overrule earlier ones:\u201d"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Source order")," ","[covered in the 1st video of cascade]",": If you have more than one rule, all of which have the same weight, then the one that comes last in the CSS will win."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Importance"),": This flag is used to make an individual property and value pair the most specific rule, thereby overriding the normal rules of the cascade, including normal inline styles. ")),(0,i.kt)("h2",{id:"specificity"},"Specificity"),(0,i.kt)("h3",{id:"what-is-specificity"},"What is Specificity?"),(0,i.kt)("p",null,"According to ",(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity"},"MDN")," \u201cSpecificity is the algorithm used by browsers to determine the CSS declaration that is the most relevant to an element, which in turn, determines the property value to apply to the element. The specificity algorithm calculates the weight of a CSS selector to determine which rule from competing CSS declarations gets applied to an element.\u201d"),(0,i.kt)("h4",{id:"how-is-specificity-calculated"},(0,i.kt)("strong",{parentName:"h4"},"How is specificity calculated?")),(0,i.kt)("p",null,"According to ",(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity#how_is_specificity_calculated"},"MDN"),",\u201d Specificity is an algorithm that calculates the weight that is applied to a given CSS declaration. The weight is determined by the number of selectors of each weight category in the selector matching the element (or pseudo-element). If there are two or more declarations providing different property values for the same element, the declared value in the style block having the matching selector with the greatest algorithmic weight gets applied."),(0,i.kt)("p",null,"The specificity algorithm is basically a three-column value of three categories or weights - ID, CLASS, and TYPE - corresponding to the three types of selectors. The value represents the count of selector components in each weight category and is written as ID - CLASS - TYPE. The three columns are created by counting the number of selector components for each selector weight category in the selectors that match the element.\u201d"),(0,i.kt)("h2",{id:"inheritance"},"Inheritance"),(0,i.kt)("h3",{id:"what-is-inheritance"},"What is Inheritance?"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://img.itch.zone/aW1nLzI0NDMyMzQuZ2lm/original/o2RXqi.gif",alt:null})),(0,i.kt)("p",null,"GIF link: ",(0,i.kt)("a",{parentName:"p",href:"https://img.itch.zone/aW1nLzI0NDMyMzQuZ2lm/original/o2RXqi.gif"},"https://img.itch.zone/aW1nLzI0NDMyMzQuZ2lm/original/o2RXqi.gif")),(0,i.kt)("p",null,"Inheritance is associated with how the elements in the HTML markup inherit properties from their parent (containing) elements and pass them on to their children"),(0,i.kt)("h3",{id:"understanding-inheritance"},"Understanding Inheritance"),(0,i.kt)("p",null,"According to ",(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance#understanding_inheritance"},"MDN")," \u201cInheritance in CSS occurs when an inheritable property is not set on an element. It goes up in its parent chain to set the property value to its parent value. CSS properties such as height, width, border, margin, padding, etc. are not inherited.\u201d"),(0,i.kt)("h3",{id:"controlling-inheritance"},"Controlling inheritance"),(0,i.kt)("h4",{id:"what-is-controlling-inheritance"},(0,i.kt)("strong",{parentName:"h4"},"What is Controlling inheritance?")),(0,i.kt)("p",null,"According to ",(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance#controlling_inheritance"},"MDN")," \u201cCSS provides five special universal property values for controlling inheritance. Every CSS property accepts these values."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Inherit")," :"),(0,i.kt)("p",null,'Sets the property value applied to a selected element to be the same as that of its parent element. Effectively, this "turns on inheritance".'),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Initial :")),(0,i.kt)("p",null,"Sets the property value applied to a selected element to the initial value of that property."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Revert :")),(0,i.kt)("p",null,"Resets the property value applied to a selected element to the browser's default styling rather than the defaults applied to that property."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Revert Layer: ")),(0,i.kt)("p",null,"Resets the property value applied to a selected element to the value established in a previous cascade layer."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Unset :")),(0,i.kt)("p",null,"Resets the property to its natural value, which means that if the property is naturally inherited it acts like inherit, otherwise it acts like the initial.\u201d"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Resetting all property values :")),(0,i.kt)("p",null,"According to ",(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance#resetting_all_property_values"},"MDN"),", \u201cThe CSS shorthand property can be used to apply one of these inheritance values to (almost) all properties at once. Its value can be any one of the inheritance values (inherit, initial, revert, revert-layer, or unset). It's a convenient way to undo changes made to styles so that you can get back to a known starting point before beginning new changes\u201d."),(0,i.kt)("h3",{id:"order-of-overriding-declarations"},"Order of overriding declarations"),(0,i.kt)("p",null,"Conflicting declarations will be applied in the following order, with later ones overriding earlier ones: ",(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance#order_of_overriding_declarations"},"Reference MDN")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Declarations in user agent style sheets (e.g. the browser's default styles, used when no other styling is set)."),(0,i.kt)("li",{parentName:"ol"},"Normal declarations in user style sheets (custom styles set by a user)."),(0,i.kt)("li",{parentName:"ol"},"Normal declarations in author style sheets (these are the styles set by us, the web developers)."),(0,i.kt)("li",{parentName:"ol"},"Important declarations in author style sheets"),(0,i.kt)("li",{parentName:"ol"},"Important declarations in user style sheets"),(0,i.kt)("li",{parentName:"ol"},"Important declarations in user agent style sheets")),(0,i.kt)("h2",{id:"organizing-your-css"},"Organizing your CSS"),(0,i.kt)("h4",{id:"why-do-we-need-to-organize-css"},"Why do we need to organize css?"),(0,i.kt)("p",null,"According to MDN, \u201cAs you start to work on larger stylesheets and big projects you will discover that maintaining a huge CSS file can be challenging. Organizing css is a  best practice for writing your CSS to make it easily maintainable, and some of the solutions you will find in use by others to help improve maintainability.\u201d"),(0,i.kt)("h2",{id:"road-map-for-better-learning"},"Road map for better learning"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Milestone 1:")," Read the Conflicting Rules section in the article (the time required to read the Conflicting Rules section is 3 minutes). "),(0,i.kt)("p",null,"Watch this video on Conflicting Rules and Cascade (8 minutes)"),(0,i.kt)(r.Z,{videoId:"4oPvurjpcNw",mdxType:"Youtube"}),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Milestone 2:")," Read the Cascade section in the article (the time required to read the Cascade section is 2 minutes). "),(0,i.kt)("p",null,"Watch this video on Importance (6 minutes)"),(0,i.kt)(r.Z,{videoId:"BHzQ_9zzuNM",mdxType:"Youtube"}),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Milestone 3:")," Read the Specificity section in the article (the time required to read the Specificity section is 2 minutes)"),(0,i.kt)("p",null,"Watch this video on Specificity (10 minutes)"),(0,i.kt)(r.Z,{videoId:"lZ6R_eYYxoE",mdxType:"Youtube"}),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Milestone 4:")," Read the complete Inheritance section in the article (the time required to read the Inheritance section is 5 minutes)"),(0,i.kt)("p",null,"Watch this video on Understanding Inheritance (8 minutes)"),(0,i.kt)(r.Z,{videoId:"ZMpaebQ3n6A",mdxType:"Youtube"}),(0,i.kt)("p",null,"Watch this video for a better understanding on Controlling Inheritance (9 minutes)"),(0,i.kt)(r.Z,{videoId:"N8tFrMZp_wA",mdxType:"Youtube"}),(0,i.kt)("p",null,"Watch this video on Overriding Declarations (2 minutes)"),(0,i.kt)(r.Z,{videoId:"7U0kj5npdB0",mdxType:"Youtube"}),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Milestone 5:")," Read the Organizing your CSS section in the article (the time required to read the Organizing your CSS section is 2 minutes)"),(0,i.kt)("p",null,"Watch this video for a better understanding on Organizing CSS (10 minutes)"),(0,i.kt)(r.Z,{videoId:"3Y03OSNw6zo",mdxType:"Youtube"}),(0,i.kt)("p",null,"By now we would have known about Cascade and Inheritance."),(0,i.kt)("p",null,"Voila, that\u2019s the end of all the concepts in this lesson. Now, time for an exercise!\t"),(0,i.kt)("h1",{id:"instructions-for-the-exercise"},"Instructions for the exercise"),(0,i.kt)("p",null,"And voila, that\u2019s the end of all the concepts in this lesson. Now, time for an exercise!"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Required links")),(0,i.kt)("p",null,"Boilerplate link: ",(0,i.kt)("a",{parentName:"p",href:"https://stackblitz.com/edit/web-platform-9wdtwu?file=index.html"},"https://stackblitz.com/edit/web-platform-9wdtwu?file=index.html")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Setting up a coding environment for the exercise")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Step 1:")," Open the boilerplate link and download the boilerplate code to your computer."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Step 2:")," Open the folder, which has the boilerplate code, using VS code."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"How to work with exercise")),(0,i.kt)("p",null,"Every exercise will have several iterations. You are expected to complete the iterations in increasing order."),(0,i.kt)("p",null,"For example, you will have to complete the first iteration before starting the second iteration, and so on."),(0,i.kt)("p",null,"You can find the instructions for completing the iterations here below as well as in the boilerplate file in which you will be working as comments."),(0,i.kt)("h1",{id:"useful-resources"},"Useful resources"),(0,i.kt)("p",null,"Now that you\u2019re done with this lesson, here are some useful post-class reading links for you."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance"},"https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://medium.com/@fay_jai/inheritance-cascading-and-specificity-in-css-explained-815c3b5eb164"},"https://medium.com/@fay_jai/inheritance-cascading-and-specificity-in-css-explained-815c3b5eb164")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://webplatform.github.io/docs/tutorials/inheritance_and_cascade/"},"https://webplatform.github.io/docs/tutorials/inheritance_and_cascade/")),(0,i.kt)("p",null,"Read This ",(0,i.kt)("a",{parentName:"p",href:"https://medium.com/web-for-you/css-conflict-resolution-rules-explained-9ab90de18aef"},"Blog")," for a better understanding of conflicting rules"),(0,i.kt)("h1",{id:"end-of-the-lesson-assessment"},"End-of-the-lesson assessment"),(0,i.kt)("p",null,"Before you go, here\u2019s a quick 5-question quiz for you."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Learning unit: Cascade")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Which of the following Cascading order has the highest precedence?"),(0,i.kt)("p",{parentName:"li"},"a. user agent declarations"),(0,i.kt)("p",{parentName:"li"},"b. user normal declarations"),(0,i.kt)("p",{parentName:"li"},"c. author normal declarations"),(0,i.kt)("p",{parentName:"li"},"d. author important declarations"))),(0,i.kt)("p",null,"Answer: a"),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Which of the following properties is used to define how nested items are rendered in 3-D space?"),(0,i.kt)("p",{parentName:"li"},"a) transform-style"),(0,i.kt)("p",{parentName:"li"},"b. transform"),(0,i.kt)("p",{parentName:"li"},"c. transform-origin"),(0,i.kt)("p",{parentName:"li"},"d. transform-3D"))),(0,i.kt)("p",null,"Answer: a"),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"The ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("strong",{parentName:"strong"},(0,i.kt)("strong",{parentName:"strong"},(0,i.kt)("strong",{parentName:"strong"},(0,i.kt)("strong",{parentName:"strong"},(0,i.kt)("strong",{parentName:"strong"},(0,i.kt)("strong",{parentName:"strong"},"___")))))))," represents the result of the cascade: it is the declared value that wins the cascade."),(0,i.kt)("p",{parentName:"li"},"a. specified Value"),(0,i.kt)("p",{parentName:"li"},"b. actual value"),(0,i.kt)("p",{parentName:"li"},"c. computed value"),(0,i.kt)("p",{parentName:"li"},"d. cascaded value"))),(0,i.kt)("p",null,"Answer: d"),(0,i.kt)("ol",{start:4},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"The CSS cascade assigns a weight to each style rule. State true or false."),(0,i.kt)("p",{parentName:"li"},"a. True"),(0,i.kt)("p",{parentName:"li"},"b. False"))),(0,i.kt)("p",null,"Answer: a"),(0,i.kt)("ol",{start:5},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"The ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("strong",{parentName:"strong"},(0,i.kt)("strong",{parentName:"strong"},(0,i.kt)("strong",{parentName:"strong"},(0,i.kt)("strong",{parentName:"strong"},(0,i.kt)("strong",{parentName:"strong"},(0,i.kt)("strong",{parentName:"strong"},"___")))))))," is the result of resolving the specified value."),(0,i.kt)("p",{parentName:"li"},"a. cascaded value"),(0,i.kt)("p",{parentName:"li"},"b. computed value"),(0,i.kt)("p",{parentName:"li"},"c. specified value"),(0,i.kt)("p",{parentName:"li"},"d. declared value"))),(0,i.kt)("p",null,"Answer: b"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Learning unit: Inheritance")),(0,i.kt)("ol",{start:6},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Which of the following options a declaration consists of?"),(0,i.kt)("p",{parentName:"li"},"a. Tag"),(0,i.kt)("p",{parentName:"li"},"b. Property"),(0,i.kt)("p",{parentName:"li"},"c. Selector"),(0,i.kt)("p",{parentName:"li"},"d. Class"))),(0,i.kt)("p",null,"Answer: b"),(0,i.kt)("ol",{start:7},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Which of the following options a rule consists of?."),(0,i.kt)("p",{parentName:"li"},"a. Tag"),(0,i.kt)("p",{parentName:"li"},"b. Selector"),(0,i.kt)("p",{parentName:"li"},"c. Declaration"),(0,i.kt)("p",{parentName:"li"},"d. Selector and declaration"))),(0,i.kt)("p",null,"Answer: d"),(0,i.kt)("ol",{start:8},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Which of the following rules allows users to import style from other stylesheets?"),(0,i.kt)("p",{parentName:"li"},"a. @media"),(0,i.kt)("p",{parentName:"li"},"b. @importance"),(0,i.kt)("p",{parentName:"li"},"c. @import"),(0,i.kt)("p",{parentName:"li"},"d. @find"))),(0,i.kt)("p",null,"Answer: c"),(0,i.kt)("ol",{start:9},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Which of the following properties is a shorthand that resets all CSS properties?"),(0,i.kt)("p",{parentName:"li"},"a. reset"),(0,i.kt)("p",{parentName:"li"},"b. initial"),(0,i.kt)("p",{parentName:"li"},"c. all"),(0,i.kt)("p",{parentName:"li"},"d. delete"))),(0,i.kt)("p",null,"Answer: c"),(0,i.kt)("ol",{start:10},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Which of the following generate \u201cvirtual\u201d rules representing their effects when running?"),(0,i.kt)("p",{parentName:"li"},"a. DOMs"),(0,i.kt)("p",{parentName:"li"},"b. !important"),(0,i.kt)("p",{parentName:"li"},"c. CSS Animations"),(0,i.kt)("p",{parentName:"li"},"d. Inheritance"))),(0,i.kt)("p",null,"Answer: c"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Learning unit: Specificity")),(0,i.kt)("p",null,"Find the specificity of the statments using the rule given below."),(0,i.kt)("p",null,"A selector\u2019s specificity is calculated as follows:"),(0,i.kt)("p",null,"i) count 1 if the declaration is from is a \u2018style\u2019 attribute rather than a rule with a selector, 0 otherwise (= a) (In HTML, values of an element\u2019s \u201cstyle\u201d attribute are style sheet rules. These rules have no selectors, so a=1, b=0, c=0, and d=0.)"),(0,i.kt)("p",null,"ii) count the number of ID attributes in the selector (= b)"),(0,i.kt)("p",null,"iii) count the number of other attributes and pseudo-classes in the selector (= c)"),(0,i.kt)("p",null,"iv) count the number of element names and pseudo-elements in the selector (= d)"),(0,i.kt)("ol",{start:11},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Find the specificity of this \u201c*\u201d."),(0,i.kt)("p",{parentName:"li"},"a. specificity = 0,0,0,0"),(0,i.kt)("p",{parentName:"li"},"b. specificity = 0,0,0,1"),(0,i.kt)("p",{parentName:"li"},"c. specificity = 0,0,1,0"),(0,i.kt)("p",{parentName:"li"},"d. specificity = 1,0,0,0"))),(0,i.kt)("p",null,"Answer : a"),(0,i.kt)("ol",{start:12},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Find the specificity of this \u201d ul li\u201d."),(0,i.kt)("p",{parentName:"li"},"a. specificity = 0,0,0,0"),(0,i.kt)("p",{parentName:"li"},"b. specificity = 0,0,1,2"),(0,i.kt)("p",{parentName:"li"},"c. specificity = 0,0,0,2"),(0,i.kt)("p",{parentName:"li"},"d. specificity = 2,0,0,0"))),(0,i.kt)("p",null,"Answer: c"),(0,i.kt)("ol",{start:13},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Find the specificity of this \u201cli:first-line\u201d."),(0,i.kt)("p",{parentName:"li"},"a. specificity = 0,0,1,1"),(0,i.kt)("p",{parentName:"li"},"b. specificity = 0,0,0,2"),(0,i.kt)("p",{parentName:"li"},"c. specificity = 0,1,0,1"),(0,i.kt)("p",{parentName:"li"},"d. specificity = 1,0,0,1"))),(0,i.kt)("p",null,"Answer: b"),(0,i.kt)("ol",{start:14},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Find the specificity of this \u201cul ol li.red\u201d."),(0,i.kt)("p",{parentName:"li"},"a. specificity = 0,0,3,1"),(0,i.kt)("p",{parentName:"li"},"b. specificity = 0,0,1,3"),(0,i.kt)("p",{parentName:"li"},"c. specificity = 1,1,1,1"),(0,i.kt)("p",{parentName:"li"},"d. specificity = 1,2,2,1"))),(0,i.kt)("p",null,"Answer: b"),(0,i.kt)("ol",{start:15},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Find the specificity of this \u201c#x34y\u201d."),(0,i.kt)("p",{parentName:"li"},"a. specificity = 0,0,0,1"),(0,i.kt)("p",{parentName:"li"},"b. specificity = 0,0,1,0"),(0,i.kt)("p",{parentName:"li"},"c. specificity = 0,1,0,0"),(0,i.kt)("p",{parentName:"li"},"d. specificity = 1,0,0,0"))),(0,i.kt)("p",null,"Answer:c"))}d.isMDXComponent=!0},9304:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(3191),i=n(7294);const r=e=>{var t;const n={height:"390",width:"640",playerVars:{autoplay:0,...e.start&&{start:e.start},...e.end&&{end:e.end}}};return i.createElement(a.Z,{videoId:null!=(t=e.videoId)?t:"",opts:n})}}}]);