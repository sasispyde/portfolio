import React, { Component } from 'react';
import FileViewer from 'react-file-viewer';
import file from '../Assets/resume/res.pdf';
import '../css/resume.css'
const type = 'pdf';

class Resume extends Component {
  render() {
    return (
    <div className="container con">
      <FileViewer
        fileType={type}
        filePath={file}
        onError={this.onError}/>
    </div>
    );
  }
}

export default Resume;