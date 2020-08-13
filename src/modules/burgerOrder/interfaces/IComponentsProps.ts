import { IDefaultState, IBurgerBuilder } from "../../../interfaces";
import { RouteComponentProps } from "react-router-dom";

export declare interface IBuildControlProps {
  ingredient: string
  onAddIngredient: (ingredient: string) => Promise<void>
};

export declare interface IOrderControlsProps extends RouteComponentProps {
  burger: IBurgerBuilder
  onResetBurger: () => Promise<void>
  onAddToCart: (burger: IBurgerBuilder) => Promise<void>
}

export declare interface IBurgerBuilderProps {
  burgerBuilder: IDefaultState<IBurgerBuilder>
}

export declare interface IRecommendationCardProps {
  burgerName: string
  ingredients: string
  price: number
  onSetIngredients: (ingredients: string, price: number) => Promise<void>
}
