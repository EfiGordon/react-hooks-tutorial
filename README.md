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

## useCallback()
OK so we are moving one step deeper in understanding to React hooks concept. 

So our ```Ingredients Component``` contains the following line:
```
  const filterdIngredientsHandler = filteredIngredients => {
    setUserIngredients(filteredIngredients);
  };
...
<Search onLoadIngredients={filterdIngredientsHandler} />
```


and the ```Search``` component has a `useEffect` like the following:

```
useEffect(() => {
// http get request
},[onLoadIngredients])
```

It means that when we render the `Ingredients` component it will render the `Search` component and it will execute the `filterdIngredientsHandler` and because we use there the `setUserIngredients` which is the useState function it will re-render the `Ingredients` component and we have here an **infinite loop**...
to AVOID the we will use useCallback:

```
  const filterdIngredientsHandler = useCallback(filteredIngredients => {
    setUserIngredients(filteredIngredients);
  }, [setUserIngredients]);
```

which means that the filterdIngredientsHandler will be executed only if the setUserIngredients will be changed.









References: 
*   Maximilian's React [course](https://www.udemy.com/course/react-the-complete-guide-incl-redux/).