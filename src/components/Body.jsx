import React from 'react';
import PropTypes from 'prop-types';
import Generate from './Generate';
import Display from './Display';


class Body extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      masterPosterList: {
        poster: {
          image: 'https://images.unsplash.com/photo-1478098711619-5ab0b478d6e6?ixlib=rb-0.3.5&s=133f6a553c1b7956fb7e530474771930&auto=format&fit=crop&w=1350&q=80',
          quote: 'Intervention only works when the people concerned seem to be keen for peace. — Nelson Mandela'
        }
      }
    };
    this.handleGenerate = this.handleGenerate.bind(this);
  }

  handleGenerate() {
    let newMasterPosterList = this.state.masterPosterList;
    console.log(this.state.masterPosterList);
    this.setState({masterPosterList: newMasterPosterList});
    console.log(newMasterPosterList);
  }

  render() {
  return (
    <div>
      <Generate onGenerate={this.handleGenerate}/>
      <Display posterList={this.state.masterPosterList}/>
    </div>
  );
}

}

Body.propTypes = {
  onClick: PropTypes.func
};

export default Body;
