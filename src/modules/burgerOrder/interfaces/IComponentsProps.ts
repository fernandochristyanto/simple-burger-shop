import { IDefaultState, IBurgerBuilder } from "../../../interfaces";

export declare interface IBuildControlProps {
  ingredient: string
  onAddIngredient: (ingredient: string) => Promise<void>
};

export declare interface IOrderControlsProps {
  onResetBurger: () => Promise<void>
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
