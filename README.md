
DISCLAIMER: this mini-project is based on Maximillian's React [course](https://www.udemy.com/course/react-the-complete-guide-incl-redux/l).

Note: React hooks supported in version > 16.

As far as i know the standard today is to use react hooks instead of split the app to functional and class based components (the old way).

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
