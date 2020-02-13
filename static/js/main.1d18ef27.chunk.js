(window["webpackJsonpbook-manager"]=window["webpackJsonpbook-manager"]||[]).push([[0],{231:function(e,t,a){e.exports=a(453)},236:function(e,t,a){},237:function(e,t,a){},242:function(e,t,a){},243:function(e,t,a){},391:function(e,t,a){},392:function(e,t,a){},393:function(e,t,a){},410:function(e,t,a){},411:function(e,t,a){},412:function(e,t,a){},413:function(e,t,a){},415:function(e,t,a){},416:function(e,t,a){},417:function(e,t,a){},453:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(225),l=a.n(o),c=(a(236),a(13)),i=a(14),s=a(16),u=a(15),m=a(17),d=a(7),b=a(34),p=(a(237),a(6)),h=(a(242),a(243),Object(p.b)(function(e){return{auth:e.firebase.auth,profile:e.firebase.profile}})(function(e){var t=e.auth,a=e.profile;return t.uid?r.a.createElement("header",{className:"welcome-container"},r.a.createElement("h1",{className:"welcome-title"},"Welcome ".concat(a.displayName)),r.a.createElement("p",null,"You can find a book and add it to your shelf, then click on it and have a look to more details.")):r.a.createElement(b.a,{to:"/signIn-and-signUp"})})),f=a(22),E=a(33),g=(a(391),a(90)),O=a.n(g),v=a(91),y=(a(392),function(e){var t=e.handleChange,a=e.isTextArea,n=e.label,o=Object(v.a)(e,["handleChange","isTextArea","label"]);return r.a.createElement("div",{className:"row"},r.a.createElement("label",null,n),a?r.a.createElement("textarea",{id:"note",cols:"30",rows:"1",onChange:t}):r.a.createElement("input",Object.assign({onChange:t},o)))}),j=(a(393),function(e){var t=e.children,a=e.isGoogleSignIn,n=Object(v.a)(e,["children","isGoogleSignIn"]);return r.a.createElement("button",Object.assign({className:"".concat(a?"google-sign-in":""," custom-button")},n),t)}),k=a(228),N=a.n(k),w=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={books:[],bookToAdd:[],title:"",author:null,note:null,rate:null,image:null,inputIsActive:!1,hasError:!1},a.handleSubmit=function(e){e.preventDefault(),a.props.addBook(a.state.bookToAdd[0]),a.setState({title:""}),e.target.reset()},a.handleSearch=function(e){if(e.persist(),a.setState({title:"",books:[],bookToAdd:[]}),""===e.target.value)a.setState({inputIsActive:!1});else{var t=e.target.value;a.setState({inputIsActive:!a.state.inputIsActive,title:t});var n=t.replace(" ","+"),r="https://www.googleapis.com/books/v1/volumes?q=".concat(n,"&key=").concat("AIzaSyAF3m0FTGMZQaARMuDp8LhWcSNa6FC_QN4");N.a.get(r).then(function(e){var t=e.data.items.filter(function(e){return"en"===e.volumeInfo.language});a.setState({books:t})})}},a.handleData=function(e){e.persist();var t=a.state.books.filter(function(t){return t.id===e.target.dataset.id});a.setState({bookToAdd:t,inputIsActive:!1,title:t[0].volumeInfo.title})},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=this.props.auth,a=this.state,n=a.books,o=a.inputIsActive;return t.uid?r.a.createElement("div",{className:"add-book-container",onClick:this.closeDropdown},r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement(y,{id:"title",name:"title",type:"text",placeholder:"Search a book for title",value:this.state.title,handleChange:this.handleSearch,autoComplete:"off",required:!0}),r.a.createElement("div",{className:"row"},r.a.createElement(j,null,"Add book"))),o?r.a.createElement("div",{className:"search-list"},n.map(function(t){return r.a.createElement("div",{className:"book",key:t.id,onClick:e.handleData,"data-id":t.id},r.a.createElement("div",{className:"book-col","data-id":t.id},r.a.createElement("img",{"data-id":t.id,src:O.a,alt:"book cover"})),r.a.createElement("div",{className:"book-col","data-id":t.id},r.a.createElement("h4",{"data-id":t.id},t.volumeInfo.title),r.a.createElement("h5",{"data-id":t.id},t.volumeInfo.authors)))})):null):r.a.createElement(b.a,{to:"/signIn-and-signUp"})}}]),t}(n.Component),S=Object(p.b)(function(e){return console.log("STATE REDUX: ",e),{auth:e.firebase.auth}},function(e){return{addBook:function(t){return e(function(e){return{type:"ADD_BOOK",payload:e}}(t))}}})(w),C=(r.a.Component,a(410),function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props,t=e.books,a=(e.currentUser,e.deleteBook),n=t.map(function(e){return r.a.createElement("tr",{key:e.id,className:"rows"},r.a.createElement("th",{className:"cover-book"},r.a.createElement("img",{src:e.volumeInfo.imageLinks.smallThumbnail?e.volumeInfo.imageLinks.smallThumbnail:O.a,alt:"book cover"})),r.a.createElement("th",{className:"title"},r.a.createElement(d.b,{to:"/my-books/".concat(e.id)},e.volumeInfo.title," ")),r.a.createElement("th",null,e.volumeInfo.authors),r.a.createElement("th",{className:"actions-row",id:e.id},r.a.createElement("button",{onClick:function(){a(e.id)}},r.a.createElement("i",{className:"far fa-trash-alt"}))))});return r.a.createElement("div",null,r.a.createElement("div",{className:"list-container"},r.a.createElement("h2",null,"My Books"),r.a.createElement(S,null),r.a.createElement("table",null,r.a.createElement("tbody",null,r.a.createElement("tr",{className:"table-title"},r.a.createElement("th",null),r.a.createElement("th",null,"Title"),r.a.createElement("th",null,"Author"),r.a.createElement("th",null)),n))))}}]),t}(n.Component)),I=Object(f.compose)(Object(p.b)(function(e){return{books:e.shelf.books,currentUser:e.firebase.auth}},function(e){return{deleteBook:function(t){return e({type:"DELETE_BOOK",payload:t})}}}))(C),P=Object(p.b)(function(e){return{auth:e.firebase.auth,books:e.shelf.books}})(function(e){var t=e.auth,a=e.books,n=e.deleteBook;return t.uid?r.a.createElement(r.a.Fragment,null,r.a.createElement(h,null),r.a.createElement("div",{className:"books-library"},r.a.createElement(I,{books:a,deleteBook:n}))):r.a.createElement(b.a,{to:"/signIn-and-signUp"})}),R=(a(411),function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(s.a)(this,Object(u.a)(t).call(this))).hideShowClick=function(){e.setState({isVisible:!e.state.isVisible})},e.state={isVisible:!1},e}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.auth;return r.a.createElement("div",{className:"container-nav"},r.a.createElement(d.b,{to:"/"},r.a.createElement("h1",{className:"logo"},"BooksManager")),e.uid?this.state.isVisible?r.a.createElement("div",null,r.a.createElement("ul",{className:"navbar"},r.a.createElement("li",null,r.a.createElement(d.b,{to:"/my-books"},"My\xa0Books")),r.a.createElement("li",{className:"logout",onClick:this.props.signOut},r.a.createElement(d.b,{to:"/signIn-and-signUp"},"Logout")),r.a.createElement("li",{className:"hamburger",onClick:this.hideShowClick},r.a.createElement("i",{className:"fas fa-bars"})))):r.a.createElement("div",{className:"hamburger",onClick:this.hideShowClick},r.a.createElement("i",{className:"fas fa-bars"})):r.a.createElement("div",{className:"log-div"},r.a.createElement("p",{className:"login-register"},r.a.createElement(d.b,{to:"/signIn-and-signUp"},"Sing In or Sign Up"))))}}]),t}(n.Component)),D=Object(p.b)(function(e){return{auth:e.firebase.auth}},function(e){return{signOut:function(){return e(function(e,t,a){(0,a.getFirebase)().auth().signOut().then(function(){e({type:"SIGNOUT_SUCCESS "})})})}}})(R),U=(a(412),function(){return r.a.createElement("div",{className:"footer"},r.a.createElement("div",{className:"grid"},r.a.createElement("div",{className:"logo-container"},r.a.createElement("h1",{className:"logo"},"BooksManager"),r.a.createElement("h5",null,"Great tool for you")),r.a.createElement("div",{className:"useful-link"},r.a.createElement("h4",null,"Useful Links"),r.a.createElement("p",null,"Support"),r.a.createElement("p",null,"Gift Cards"),r.a.createElement("p",null,"Pricing")),r.a.createElement("div",{className:"company"},r.a.createElement("h4",null,"Company"),r.a.createElement("p",null,"About"),r.a.createElement("p",null,"Partners"),r.a.createElement("p",null,"We are hiring!")),r.a.createElement("div",{className:"nav"},r.a.createElement("h4",null,"Navigation"),r.a.createElement("p",null,"Dashboard"),r.a.createElement("p",null,"My books"),r.a.createElement("p",null,"Add a book"),r.a.createElement("p",null,"My profile"))),r.a.createElement("div",{className:"copyright"},r.a.createElement("p",null,"\xa9 iRead 2019 "),r.a.createElement("p",null,"Sitemap"),r.a.createElement("p",null,"Disclaimer"),r.a.createElement("p",null,"User Privacy"),r.a.createElement("p",null,"Terms")),r.a.createElement("div",{className:"socials"},r.a.createElement("i",{className:"fab fa-facebook"}),r.a.createElement("i",{className:"fab fa-twitter"}),r.a.createElement("i",{className:"fab fa-linkedin-in"})))}),A=(a(413),a(48)),L=a.n(A),_=a(92),G=a(24),T=(a(415),function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(s.a)(this,Object(u.a)(t).call(this))).handleChange=function(t){var a=t.target,n=a.value,r=a.name;e.setState(Object(G.a)({},r,n))},e.handleSubmit=function(){var t=Object(_.a)(L.a.mark(function t(a){return L.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:a.preventDefault(),e.props.signIn(e.state),setTimeout(function(){return e.props.history.push("/")},1200);case 3:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}(),e.state={email:"",password:""},e}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.currentUser,t=this.state,a=t.email,n=t.password;return r.a.createElement("div",{className:"sign-in"},r.a.createElement("h1",null,"Login"),r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement(y,{label:"Email",name:"email",type:"email",value:a,handleChange:this.handleChange}),r.a.createElement(y,{label:"Password",name:"password",type:"password",value:n,handleChange:this.handleChange}),r.a.createElement("div",{className:"error-login"},e?r.a.createElement("p",null,e,", be sure to digit the correct E-mail and password."):null),r.a.createElement(j,{type:"submit"},"Login"),r.a.createElement(j,{onClick:this.props.signInWithProvider,isGoogleSignIn:!0},"Sign in with Google")))}}]),t}(n.Component)),B=Object(b.g)(Object(p.b)(function(e){return{currentUser:e.currentUser}},function(e){return{signIn:function(t){return e((a=t,function(e,t,n){(0,n.getFirebase)().auth().signInWithEmailAndPassword(a.email,a.password).then(function(){e({type:"LOGIN_SUCCESS"})}).catch(function(t){e({type:"LOGIN_ERROR",err:t})})}));var a},signInWithProvider:function(){return e(function(e,t,a){var n=a.getFirebase,r=a.getFirestore,o=n(),l=r(),c=new o.auth.GoogleAuthProvider;c.setCustomParameters({prompt:"select_account"}),o.auth().signInWithPopup(c).then(function(t){return e({type:"LOGIN_WITH_GOOGLE_SUCCESS"}),l.collection("users").doc(t.user.uid).set({displayName:t.user.displayName,createdAt:new Date,email:t.user.email})}).catch(function(t){e({type:"LOGIN_WITH_GOOGLE_ERROR"},console.log(t))})})}}})(T)),F=(a(416),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).handleChange=function(e){var t=e.target,n=t.name,r=t.value;a.setState(Object(G.a)({},n,r))},a.handleSubmit=function(){var e=Object(_.a)(L.a.mark(function e(t){return L.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),a.props.signUp(a.state);case 2:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),a.state={displayName:"",email:"",password:"",confirmPassword:""},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.state,t=e.displayName,a=e.email,n=e.password,o=e.confirmPassword,l=this.props.currentUser;return r.a.createElement("div",{className:"sign-up"},r.a.createElement("h1",null,"Register"),r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement(y,{label:"Username",type:"text",name:"displayName",value:t,handleChange:this.handleChange,required:!0}),r.a.createElement(y,{label:"Email",type:"email",name:"email",value:a,handleChange:this.handleChange,required:!0}),r.a.createElement(y,{label:"Password",type:"password",name:"password",value:n,handleChange:this.handleChange,required:!0}),r.a.createElement(y,{label:"Confirm password",type:"password",name:"confirmPassword",value:o,handleChange:this.handleChange,required:!0}),r.a.createElement("div",{className:"error-login"},l?r.a.createElement("p",null,l,", be sure to digit the correct E-mail and password."):null),r.a.createElement(j,{type:"submit"},"Register")))}}]),t}(n.Component)),x=Object(b.g)(Object(p.b)(function(e){return{auth:e.firebase.auth,currentUser:e.currentUser}},function(e){return{signUp:function(t){return e(function(e){return function(t,a,n){var r=n.getFirebase,o=n.getFirestore,l=r(),c=o();l.auth().createUserWithEmailAndPassword(e.email,e.password).then(function(t){return c.collection("users").doc(t.user.uid).set({displayName:e.displayName,createdAt:new Date,email:e.email})}).then(function(){t({type:"SIGNUP_SUCCESS"})}).catch(function(e){t({type:"SIGNUP_ERROR",err:e})})}}(t))}}})(F)),W=Object(p.b)(function(e){return{auth:e.firebase.auth}})(function(e){return e.auth.uid?r.a.createElement(b.a,{to:"/"}):r.a.createElement("div",{className:"sign-container"},r.a.createElement(B,null),r.a.createElement(x,null))}),H=(a(417),Object(f.compose)(Object(p.b)(function(e){return{books:e.firestore.ordered.books}}),Object(E.firestoreConnect)([{collection:"books"}]))(function(e){if(e.books){var t=e.books.filter(function(t){return t.id===e.match.params.id});if(console.log(t),t){var a=t[0].volumeInfo;return r.a.createElement("div",{className:"book-details"},r.a.createElement(d.b,{to:"/my-books"},r.a.createElement("div",{className:"close-window"},r.a.createElement("i",{className:"fas fa-times"}))),r.a.createElement("h1",null,a.title),r.a.createElement("div",{className:"grid"},r.a.createElement("div",{className:"col"},r.a.createElement("img",{src:a.imageLinks.thumbnail,alt:"cover book"})),r.a.createElement("div",{className:"col details"},r.a.createElement("h2",null,"by ",a.authors),r.a.createElement("p",null,"Page: ",a.pageCount),r.a.createElement("p",null,"Published in ",a.publishedDate),r.a.createElement("p",null,r.a.createElement("i",{className:"fas fa-share-alt"})," Share with a friend!"))),r.a.createElement("div",{className:"amazon-btn"},r.a.createElement(j,null,"Buy on Amazon")))}return r.a.createElement("div",{className:"book-details"},r.a.createElement("h1",null,"Sorry, We can't find that book"))}return r.a.createElement("div",{className:"book-details"},r.a.createElement("h1",null,"Sorry, There is a problem with you internet provider!"))})),K=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(d.a,null,r.a.createElement("div",{className:"container"},r.a.createElement(D,null),r.a.createElement(b.d,null,r.a.createElement(b.b,{exact:!0,path:"/",render:function(e){return r.a.createElement(P,e)}}),r.a.createElement(b.b,{exact:!0,path:"/my-books",render:function(e){return r.a.createElement(P,e)}}),r.a.createElement(b.b,{path:"/my-books/:id",component:H}),r.a.createElement(b.b,{path:"/signIn-and-signUp",render:function(){return r.a.createElement(W,null)}}))),r.a.createElement(U,null))}}]),t}(n.Component);function M(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function q(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?M(a,!0).forEach(function(t){Object(G.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):M(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var z={currentUser:null},V=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:z,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN_SUCCESS":return console.log("login success"),q({},e,{currentUser:null});case"LOGIN_ERROR":return console.log("login error"),q({},e,{currentUser:"Login failed"});case"SIGNOUT_SUCCESS":return console.log("signout success"),e;case"LOGIN_WITH_GOOGLE_SUCCESS":return console.log("login with google success"),q({},e,{currentUser:null});case"LOGIN_WITH_GOOGLE_ERROR":return console.log("login with google error"),q({},e,{currentUser:"Login with google failed"});case"SIGNUP_SUCCESS":return console.log("signup success"),q({},e,{currentUser:null});case"SIGNUP_ERROR":return console.log("signup error"),q({},e,{currentUser:t.err.message});default:return e}},J=a(94);function Q(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function X(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?Q(a,!0).forEach(function(t){Object(G.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):Q(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var Y=function(e,t){return e.find(function(e){return e.id===t.id})?Object(J.a)(e):[].concat(Object(J.a)(e),[X({},t)])},Z=function(e,t){var a=e.filter(function(e){return e.id!==t});return Object(J.a)(a)};function $(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function ee(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?$(a,!0).forEach(function(t){Object(G.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):$(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var te={books:[],added:!1},ae=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:te,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_BOOK":return ee({},e,{books:Y(e.books,t.payload)});case"ADD_BOOK_ERROR":return console.log("ADD BOOK ERROR"),e;case"DELETE_BOOK":return ee({},e,{books:Z(e.books,t.payload)});case"DELETE_BOOK_ERROR":return console.log("BOOK DELETED ERROR"),e;default:return e}};function ne(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function re(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?ne(a,!0).forEach(function(t){Object(G.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):ne(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var oe={number:0,hiddenInput:!1},le=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:oe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_CHALLENGE":return re({},e,{hiddenInput:!0,number:t.payload});case"SET_CHALLENGE_ERROR":return console.log("SET CHALLENGE ERROR"),e;case"EDIT_CHALLENGE":return re({},e,{hiddenInput:!0,number:t.payload});case"EDIT_CHALLENGE_ERROR":return console.log("EDIT CHALLENGE ERROR"),e;default:return e}},ce=a(64),ie=Object(f.combineReducers)({user:V,shelf:ae,challenge:le,firestore:ce.firestoreReducer,firebase:E.firebaseReducer}),se=a(229),ue=a(65),me=a.n(ue);a(448),a(451);me.a.initializeApp({apiKey:"AIzaSyB8fbTNh3BXVCAL9hB3bJQxqxOEHNzGf6E",authDomain:"book-manager-9682d.firebaseapp.com",databaseURL:"https://book-manager-9682d.firebaseio.com",projectId:"book-manager-9682d",storageBucket:"",messagingSenderId:"136708509107",appId:"1:136708509107:web:7f8bc5bc1b8b17bc"});me.a.auth(),me.a.firestore();var de=me.a,be=a(230),pe=Object(f.createStore)(ie,Object(be.composeWithDevTools)(Object(f.compose)(Object(f.applyMiddleware)(se.a.withExtraArgument({getFirebase:E.getFirebase,getFirestore:ce.getFirestore})),Object(ce.reduxFirestore)(de),Object(E.reactReduxFirebase)(de,{useFirestoreForProfile:!0,userProfile:"users",attachAuthIsReady:!0}))));pe.firebaseAuthIsReady.then(function(){l.a.render(r.a.createElement(p.a,{store:pe},r.a.createElement(K,null)),document.getElementById("root"))})},90:function(e,t,a){e.exports=a.p+"static/media/no-image.b1edc35f.png"}},[[231,1,2]]]);
//# sourceMappingURL=main.1d18ef27.chunk.js.map