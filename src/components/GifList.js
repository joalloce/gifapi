import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { getGifsTrending } from "../actions/gifActions";
import GifView from "./GifView";
import { Container, Row, Modal,ModalBody } from "reactstrap";
class GifList extends Component {
  componentDidMount() {
    this.props.getGifsTrending();
  }
  state = {
    modalImg: "",
    modal: false
  };

  handleModal = modalImg => {
    this.setState({ modalImg });
    this.toggle();
  };
  toggle = () => {
    this.setState(prev => ({
      modal: !prev.modal
    }))
  }
  render() {
    const { gifs } = this.props.gif;

    return (
      <Container>
        <Row>
          {gifs.map(gif => {
            return (
              <GifView
                handleModal={this.handleModal}
                gif={gif}
                key={gif.id}
              ></GifView>
            );
          })}
        </Row>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalBody>
            <img src={this.state.modalImg} alt=""/>
          </ModalBody>
        </Modal>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  gif: state.gif
});

export default connect(
  mapStateToProps,
  { getGifsTrending }
)(GifList);
