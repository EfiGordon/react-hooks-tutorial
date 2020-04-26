Note: React hooks supported in version > 16.

----------------------------------------------------------------
the basic app structure is:

   * index.js
        * App.js
            * components/Ingredeints/Ingrediens.js
                *   IngredientForm 
                *   Search 
     
Note: the `IngredientForm` component is using React.memo, which means that the component will be re-rendered only if its props will change, so basiclly in the initial mode IngredientForm  it will never re-rendered because it has no props.

```
const IngredientForm = React.memo(props => {
...
}
```


# React hooks
## useState()
This is the most popular hook
,the common use case is like this:
```
    const [currentState, setCurrentStateFunction] = useState('some inital state, can be any type such string, array, object, etc..')
```

for updating the state:

```
setCurrentStateFunction('the new state')
```

## useEffect()
As its name can be implied, we use this hook when we want to make a side effects such as http request.

The following behavior is like componentDid**Update**
```
useEffect(() => {
    fetch(URL)
    .then(
    response => {
        // some logic
    }
    )
})
```

The following behavior is like componentDid**Mount**
(if there are variables in the array, the useEffect function will be executed only if its effect them.)
```
useEffect(() => {
    fetch(URL)
    .then(
    response => {
        // some logic
    }
    )
},[])
```




References: 
*   Maximillian's React [course](https://www.udemy.com/course/react-the-complete-guide-incl-redux/).