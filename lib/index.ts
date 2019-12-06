import { noValue } from '@writetome51/has-value-no-value';


// Skeletal functionality for search operations.

export abstract class AbstractSearchService {

	get results(): any {
		if (noValue(this._searchAlgorithm)) {
			throw new Error(
				'"_searchAlgorithm" must be assigned a function before you can access' +
				' the "results" property'
			);
		}
		return this._searchAlgorithm();
	}


	protected abstract _searchAlgorithm(): any;

}
