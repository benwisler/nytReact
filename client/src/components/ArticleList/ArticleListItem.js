// import React from "react";
// import { Row, Col, Button } from "react-bootstrap";
// import SaveButton from './../SaveButton'
// // RecipeListItem renders a bootstrap list item containing data from the recipe api call
// export const ArticleListItem = props => (
//   <div>
//     <li className="list-group-item">
//       <div>
//         <Row>
//           <Col size="xs-8 sm-9">
//             <h3>{props.headline}</h3>
//             <ul>
//               <li>Headline: {props.title}</li>
//               <li>url: {props.url}</li>
//               <li>date: {props.date}</li>

//               <SaveButton/>
//             </ul>
//           </Col>
//         </Row>
//       </div>
//     </li>
//   </div>
// );

import React from "react";
import "./../Form/style.css"
export const ArticleListItem = props => (
  <div>
  <li className="list-group-item">
    {props.children}
  </li>
  <br/>
  </div>
);
