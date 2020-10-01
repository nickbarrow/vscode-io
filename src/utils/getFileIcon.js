import React from 'react';
import { 
  SiJavascript as JSIcon,
  SiHtml5 as HTMLIcon } from 'react-icons/si';
import { VscJson as JSONIcon } from 'react-icons/vsc';

export default function getFileIcon(file) {
  var ext = file.substr(file.lastIndexOf('.') + 1);
  switch (ext) {
    case 'js':
      return <JSIcon color={"yellow"} />
    case 'html':
      return <HTMLIcon color={"ornage"} />
    case 'json':
      return <JSONIcon color={"yellow"} />
    default:
      break;
  }
}