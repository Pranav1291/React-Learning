Vite:- it is a bundler

JSX:- react me jsx ke andr ek hi element return kr skte hain. to either fragment '<>' ya <div> tag ka use kr skte hain return krane ke lie

* ye jo functions import export kr rhe h isi ko component kehte hain.

* agr file ke andr koi html return ho ra h to uska extension .jsx rkhna pdega otherwise .js se kam chl jaega

## Hooks :- react me hooks ka use UI ka control pura react ko dene ke liye krte hain, such as 'useState: returns an array with two elements;the current state value and a function that can be used to update the state', 'useEffect: data fetching, subscriptions, or manually changing, the DOM', 'useContext: provide access to the values passed down by a parent component', 'useReducer: often used when the next state depends on the previous state and requires more complex updates', 'useCallback and useMemo: memorizes a function , while 'useMemo' memorizes the result of a function'. 

* Props: ek components se dusre component me value pass krne k lie 

* State: components se value update kar sakti

## useCallback() hook :- function ko cache me rkhn ah aur jitna chij use hota h wo krta h 
syntax:- useCallback(fn, dependencies)