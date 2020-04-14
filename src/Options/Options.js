import React from 'react'
import OpCell from '../OpCell/OpCell'


export default function Options(props) {
    // map to generate larger options list
    const features = Object.keys(props.features).map((feature, idx) => {
        const featureHash = feature + '-' + idx;        
  
        // this return will fill in the features with populated buttons
        return (
          <fieldset className="feature" key={featureHash}>
            <legend className="feature__name">
              <h3>{feature}</h3>
            </legend>
            <OpCell 
                feature={feature} 
                features={props.features} 
                selected={props.selected} 
                handleUpdate={props.handleUpdate}
            />
          </fieldset>
        );
      });

    return features
}