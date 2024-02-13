import { TProcessingProps } from './@types';
import { Process } from './process';
// import { logger } from './utils';

export class Processing extends Process {
  constructor(props: TProcessingProps) {
    super(props);

    this.render();

    //logger('Processing initialized', props);
    // history.pushState(null, null, VIEWS.PROCESSING);
  }

  startProcess() {
    this.props.checkProcess();

    //logger('Processing startProcess', process);
  }
}
