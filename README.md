# AbstractSearchService

An abstract TypeScript/JavaScript class that simply provides a `results` property,  
which is assigned the returned result of the `_searchAlgorithm()` method.   
`_searchAlgorithm` is a property which must be assigned a function in a subclass.  
In the subclass you decide what exactly `_searchAlgorithm()` will do and what it will  
return.  Then when you access `results`, `_searchAlgorithm()` is called.


## Example
<details>
<summary>view example</summary>

```ts
// Create a subclass...
export class UsersObservableService extends ObservableService {

}



```
</details>
    

## Constructor
```ts
constructor(protected _functionThatReturnsObservable: Function)
```

## Properties
```ts
results: any // read-only
```

## Methods
<details>
<summary>view methods</summary>

```ts
subscribe(dataHandler: (data?: any) => void): Subscription

empty(): void
    // sets the observable to undefined.  Useful if you have to force-refresh
    // data.  When you call this.subscribe() after calling this.empty(), 
    // this._functionThatReturnsObservable() is called again, the observable is 
    // assigned the result, and then .subscribe() is called on it.
```
The methods below are not important to know about in order to use this  
class.  They're inherited from [BaseClass](https://github.com/writetome51/typescript-base-class#baseclass) .
```ts
protected   _createGetterAndOrSetterForEach(
                  propertyNames: string[],
                  configuration: IGetterSetterConfiguration
            ) : void
     /*********************
     Use this method when you have a bunch of properties that need getter and/or 
     setter functions that all do the same thing. You pass in an array of string 
     names of those properties, and the method attaches the same getter and/or 
     setter function to each property.
     IGetterSetterConfiguration is this object:
     {
         get_setterFunction?: (
             propertyName: string, index?: number, propertyNames?: string[]
         ) => Function,
             // get_setterFunction takes the property name as first argument and 
             // returns the setter function.  The setter function must take one 
             // parameter and return void.
     
         get_getterFunction?: (
             propertyName: string, index?: number, propertyNames?: string[]
         ) => Function
             // get_getterFunction takes the property name as first argument and 
             // returns the getter function.  The getter function must return something.
     }
     *********************/ 
   
   
protected   _returnThis_after(voidExpression: any) : this
    // voidExpression is executed, then function returns this.
    // Even if voidExpression returns something, the returned data isn't used.

protected   _errorIfPropertyHasNoValue(
                property: string, // can contain dot-notation, i.e., 'property.subproperty'
                propertyNameInError? = ''
            ) : void
    // If value of this[property] is undefined or null, it triggers fatal error:
    // `The property "${propertyNameInError}" has no value.`
```
</details>


## Inheritance Chain

ObservableService<--[BaseClass](https://github.com/writetome51/typescript-base-class#baseclass)


## Installation

`npm i  @writetome51/observable-service`

## Loading
```ts
// if using TypeScript:
import { ObservableService } from '@writetome51/observable-service';
// if using ES5 JavaScript:
var ObservableService = 
    require('@writetome51/observable-service').ObservableService;
```

## License
[MIT](https://choosealicense.com/licenses/mit/)
