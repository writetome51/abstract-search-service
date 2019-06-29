# AbstractSearchService

An abstract TypeScript/JavaScript class that provides a `results` property,  
and a `_searchAlgorithm` property.  `results` is read-only, and when accessed  
returns the result of `_searchAlgorithm()`.   
`_searchAlgorithm` must be assigned a function in a subclass, which decides  
what exactly `_searchAlgorithm()` will do and what it will return.


## Example
<details>
<summary>view example</summary>

```ts
// Create a subclass...
export class UserSearchService extends AbstractSearchService {

    searchText = '';

    constructor(private __users: User[]){
    
        this._searchAlgorithm = () => {
            // If no searchText, return all users:
            if (this.searchText.length === 0) return this.__users;
            
            // Else, check if searchText found in user's name:
            else return this.__users.filter((user) => {
                if (user.name === undefined) return false;
                else return (user.name.includes(this.searchText));
            });
        };
    }

}

let userSearch = new UserSearchService(getUsersSomehow());
userSearch.searchText = 'Jane Fonda';

console.log(userSearch.results);
// logs array of users whose names match 'Jane Fonda'
```
</details>
    


## Properties
```ts
results: any // read-only

protected _searchAlgorithm: () => any;
```


## Installation

`npm i  @writetome51/abstract-search-service`

## Loading
```ts
// if using TypeScript:
import { AbstractSearchService } from '@writetome51/abstract-search-service';
// if using ES5 JavaScript:
var AbstractSearchService = 
    require('@writetome51/abstract-search-service').AbstractSearchService;
```

## License
[MIT](https://choosealicense.com/licenses/mit/)
