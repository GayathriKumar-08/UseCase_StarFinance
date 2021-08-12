import React from 'react'
import {Redirect,Route} from 'react-router';

export default function PrivateRoute({ component: Component, flag, ...rest }) {
    console.log("====================1");
    console.log(rest);
    console.log(flag);
  
    return (
      <div>
        <Route
          render={(rprops) => {
            if (!flag) {
              console.log(" 404 Error-Redirection");
              return (
                <Redirect
                  to={{ pathname: "/", state: { from: rprops.location } }}
                />
              );
            }
  
            return <Component {...rprops} />;
          }}
        />
      </div>
    );
  }