// >> spline-area-series-binding-context
import { CategoricalDataModel } from "../../data-models/categorical-data-model";

export function onPageLoaded(args) {
    const page = args.object;
    page.bindingContext = new CategoricalDataModel();
}
// << spline-area-series-binding-context