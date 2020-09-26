import React from "react";
import {
  withStyles,
  Badge as BadgeBase,
  Typography as TypographyBase,
  Button as ButtonBase,
} from "@material-ui/core";
import { useTheme, makeStyles } from "@material-ui/styles";
import classnames from "classnames";
import { Edit } from "@material-ui/icons";

// styles
var useStyles = makeStyles(theme => ({
  badge: {
    fontWeight: 600,
    height: 16,
    minWidth: 16,
  },
}));

function Badge({ children, colorBrightness, color, ...props }) {
  var classes = useStyles();
  var theme = useTheme();
  var Styled = createStyled({
    badge: {
      backgroundColor: getColor(color, theme, colorBrightness),
    },
  });

  return (
    <Styled>
      {styledProps => (
        <BadgeBase
          classes={{
            badge: classnames(classes.badge, styledProps.classes.badge),
          }}
          {...props}
        >
          {children}
        </BadgeBase>
      )}
    </Styled>
  );
}

function Typography({
  children,
  weight,
  size,
  colorBrightness,
  color,
  ...props
}) {
  var theme = useTheme();

  return (
    <TypographyBase
      style={{
        color: getColor(color, theme, colorBrightness),
        fontWeight: getFontWeight(weight),
        fontSize: getFontSize(size, props.variant, theme),
      }}
      {...props}
    >
      {children}
      {/* <p> Sample</p> */}
    </TypographyBase>
  );
  // return (
  //   <form>
  //   <h1>Hello Abdullah </h1>
  //   <p>Enter your name:</p>
  //   <input
  //     type='text'
  //     name='username'
      
  //   />
  //   <p>Enter your age:</p>
  //   <input
  //     type='text'
  //     name='age'
      
  //   />
  //   </form>
  // );
}


const initialstate = {
  username: '',
  cars: '',
  password: '',
  }
  var state = initialstate;

function onChange(e) {
  // if (e.target.id === 'username') {
  //     state[username] = e.target.value);
  // } else if (e.target.id === 'cars') {
  //     this.setState({ portal: e.target.value });
  // } else if (e.target.id === 'password') {
  //     this.setState({ password: e.target.value });
  // }
}
function createBlogPost(data) {
  return fetch("http://127.0.0.1:5000/vaccine/register", {
      method: 'POST',
      body: JSON.stringify(data),
      // body:data,
      headers: {
          'Content-Type': 'application/json'
      }
  })
  .then(response => response.json())
  .then(response => {
      if (response.status >= 200 && response.status < 300) {
          return response;
          console.log(response);
          window.location.reload();
        } else {
         console.log('Somthing happened wrong');
        }
  }).catch(err => err);
  // console.log(data[0]);
  }
function handleSubmit (event) {
  // console.log(event);
  // console.log(event.target[0]);
  // console.log(event.taget[0]);
  // console.log({"name":event.target[0].name,"password":event.target[0].password, "portal":event.target[0].cars});
  // alert(event.target[0]);
  
  createBlogPost({"name":event.target[0].value,"password":event.target[1].value, "portal":event.target[2].value});
  //http://127.0.0.1:5000/vaccine/register POST
//   const text = {
//     news_title: this.state.title,
//     news_description: this.state.desc,
//     news_type: this.state.type
// }
  // alert('A name was submitted: ' + this.state.value);
  // event.preventDefault();
}
function AddPortalForm(){
  
  return (
    <form onSubmit= {handleSubmit} >
      <div>
    <p><label htmlFor="cars">Portals:</label></p>
  <select id="cars" onChange={onChange} name="cars">
    <option value="volvo">SmartRecruiter</option>
    <option value="saab">Workday</option>
    <option value="fiat">Greenhouse</option>
    
  </select>

    </div>
    <p>Enter your portal login credential:</p>
    <input
      type='text'
      name='username'
      id='username'
      onChange={onChange}
    />
    <p>Enter your password:</p>
    <div>
    <input
      type='password'
      name='age'
      id='password'
      onChange={onChange}
    />
    </div>
    
    <p></p>
    <p></p>
    
    <input
       type="submit"
       value="Add a new portal" />

    </form>
  );
}

function Button({ children, color, className, ...props }) {
  var theme = useTheme();

  var Styled = createStyled({
    root: {
      color: getColor(color, theme),
    },
    contained: {
      backgroundColor: getColor(color, theme),
      boxShadow: theme.customShadows.widget,
      color: `${color ? "white" : theme.palette.text.primary} !important`,
      "&:hover": {
        backgroundColor: getColor(color, theme, "light"),
        boxShadow: theme.customShadows.widgetWide,
      },
      "&:active": {
        boxShadow: theme.customShadows.widgetWide,
      },
    },
    outlined: {
      color: getColor(color, theme),
      borderColor: getColor(color, theme),
    },
    select: {
      backgroundColor: theme.palette.primary.main,
      color: "#fff",
    },
  });

  return (
    <Styled>
      {({ classes }) => (
        <ButtonBase
          classes={{
            contained: classes.contained,
            root: classes.root,
            outlined: classes.outlined,
          }}
          {...props}
          className={classnames(
            {
              [classes.select]: props.select,
            },
            className,
          )}
        >
          {children}
        </ButtonBase>
      )}
    </Styled>
  );
}

export { Badge, Typography, Button, AddPortalForm };

// ########################################################################

function getColor(color, theme, brigtness = "main") {
  if (color && theme.palette[color] && theme.palette[color][brigtness]) {
    return theme.palette[color][brigtness];
  }
}

function getFontWeight(style) {
  switch (style) {
    case "light":
      return 300;
    case "medium":
      return 500;
    case "bold":
      return 600;
    default:
      return 400;
  }
}

function getFontSize(size, variant = "", theme) {
  var multiplier;

  switch (size) {
    case "sm":
      multiplier = 0.8;
      break;
    case "md":
      multiplier = 1.5;
      break;
    case "xl":
      multiplier = 2;
      break;
    case "xxl":
      multiplier = 3;
      break;
    default:
      multiplier = 1;
      break;
  }

  var defaultSize =
    variant && theme.typography[variant]
      ? theme.typography[variant].fontSize
      : theme.typography.fontSize + "px";

  return `calc(${defaultSize} * ${multiplier})`;
}

function createStyled(styles, options) {
  var Styled = function(props) {
    const { children, ...other } = props;
    return children(other);
  };

  return withStyles(styles, options)(Styled);
}
