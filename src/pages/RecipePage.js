import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navigation from "../components/Navigation";
import { Link } from "react-router-dom";
import { getMealDetails } from "../actions/searchActions";
import InfoText from "../components/recipePageComponents/InfoText";
import Instructions from "../components/recipePageComponents/Instructions";
import IngredientMeasurementList from "../components/recipePageComponents/IngredientMeasurementList";
import SearchError from "../components/SearchError";

// Material UI imports
import {
  Box,
  Breadcrumbs,
  Divider,
  Grid,
  makeStyles,
  LinearProgress,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  pageStyling: {
    [theme.breakpoints.down("sm")]: {
      padding: "0!important",
    },
  },
  MuiBox: {
    padding: "0 3.5rem 0 3.5rem",
    marginTop: "4rem",
    [theme.breakpoints.down("sm")]: {
      padding: "0",
    },
  },
  imageStyling: {
    marginTop: "1rem",
    height: "auto",
    maxWidth: "100%",
  },
  MuiBreadCrumb: {
    position: "absolute",
    width: "80%",
    top: "10.5rem",
    [theme.breakpoints.down("lg")]: {
      top: "10rem",
      left: "2.5rem",
    },
    [theme.breakpoints.down("xs")]: {
      top: "12rem",
      left: "2.8rem",
    },
  },
  Linkstyles: {
    textDecoration: "none",
    color: "grey",
    "&:hover": {
      textDecoration: "underline",
    },
  },
}));

const RecipePage = ({ match }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const meal = useSelector((state) => state.meal);
  const {
    mealDetails,
    ingredientsList,
    measurementsList,
    loading,
    error,
  } = meal;
  const saveRecipe = useSelector((state) => state.recipesSaved);
  const { error: saveError, success } = saveRecipe;

  useEffect(() => {
    dispatch(getMealDetails(match.params.id));
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <Navigation />
      <Divider />
      <Box className={classes.MuiBox} component="section">
        {loading ? (
          <LinearProgress color="primary" />
        ) : error ? (
          <Typography>
            Im sorry there was an accident retrieving your recipe, and the dog
            at it :(
          </Typography>
        ) : (
          <>
            <Breadcrumbs aria-label="history" className={classes.MuiBreadCrumb}>
              <Link className={classes.Linkstyles} to="/homepage">
                Recipe Search
              </Link>
              <Typography style={{ color: "black" }}>
                {mealDetails.strMeal}
              </Typography>
            </Breadcrumbs>
            {saveError && (
              <SearchError
                variant="error"
                message="Failed to save recipe"
                open={true}
              />
            )}
            {success && (
              <SearchError
                variant="success"
                message="Recipe saved!"
                open={true}
              />
            )}
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
              className={classes.pageStyling}
            >
              <Grid
                className={classes.pageStyling}
                container
                justify="center"
                item
                xs={12}
                lg={6}
              >
                <img
                  alt={mealDetails.strMeal}
                  className={classes.imageStyling}
                  src={mealDetails.strMealThumb}
                ></img>
              </Grid>
              <InfoText
                className={classes.pageStyling}
                title={mealDetails.strMeal}
                area={mealDetails.strArea}
                category={mealDetails.strCategory}
                youtube={mealDetails.strYoutube}
                mealId={mealDetails.idMeal}
              />
              <IngredientMeasurementList
                className={classes.pageStyling}
                ingredientList={ingredientsList}
                measurementList={measurementsList}
              />
              <Instructions
                className={classes.pageStyling}
                instructions={mealDetails.strInstructions}
              />
            </Grid>
          </>
        )}
      </Box>
    </div>
  );
};

export default RecipePage;
