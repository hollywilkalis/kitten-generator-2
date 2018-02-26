import React from 'react';
import PropTypes from 'prop-types';
import Generate from './Generate';
import Display from './Display';
import kitteh from './../../kitteh1.jpg';


class Body extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      masterPosterList: {
        poster: {
          image: '{kitteh}',
          quote: 'Intervention only works when the people concerned seem to be keen for peace. — Nelson Mandela'
        }
      }
    };
    this.handleGenerate = this.handleGenerate.bind(this);
  }

  handleGenerate(props) {
    console.log('clickety click!');
  }

  render() {
  return (
    <div>
      <Generate onGenerate={this.handleGenerate}/>
      <Display />
    </div>
  );
}

}

Body.propTypes = {
  onClick: PropTypes.func
};

export default Body;
