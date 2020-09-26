import React from "react";
import { Grid } from "@material-ui/core";

// styles
import useStyles from "./styles";

// components
import PageTitle from "../../components/PageTitle";
import Widget from "../../components/Widget";
import { Typography, AddPortalForm } from "../../components/Wrappers";

export default function TypographyPage() {
  var classes = useStyles();

  return (
    <>
      <PageTitle title="Add New Jobs Portal" />
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Widget title="New Portal Form" disableWidgetMenu>
            <div className={classes.dashedBorder}>
              {/* <Typography variant="h1" className={classes.text}>
                h1. Heading
              </Typography> */}
              <AddPortalForm> </AddPortalForm>
              {/* <Typography variant="h2" className={classes.text}>
                h2. Heading
              </Typography>
              <Typography variant="h3" className={classes.text}>
                h3. Heading
              </Typography>
              <Typography variant="h4" className={classes.text}>
                h4. Heading
              </Typography>
              <Typography variant="h5" className={classes.text}>
                h5. Heading
              </Typography>
              <Typography variant="h6">h6. Heading</Typography> */}
              
            </div>
          </Widget>
        </Grid>
        
       
      </Grid>
    </>
  );
}
