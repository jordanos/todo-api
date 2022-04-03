import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import StyledWrapper, {
  StyledMainWrapper,
} from 'shared/components/Wrappers/Styles';
import { NavHeader } from 'shared/store/reducers/appReducer';
import DashboardHeader from './DashboardHeader';
import InProgress from './InProgress';
import NextEvents from './NextEvents';

interface Props {
  dispatch: any;
}

const Dashboard: React.FC<Props> = ({ dispatch }) => {
  useEffect(() => {
    const payload = {
      title: 'Dashboard',
      icon: (
        <svg
          width="20"
          height="22"
          viewBox="0 0 20 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M19.8532 16.8541L10.3548 21.5825C10.2428 21.6305 10.1221 21.6553 10.0002 21.6553C9.87834 21.6553 9.75771 21.6305 9.64568 21.5825L0.146826 16.8541C-0.0465251 16.7574 -0.0465251 16.5988 0.146826 16.5017L2.4216 15.3715C2.5338 15.3235 2.65458 15.2987 2.77664 15.2987C2.8987 15.2987 3.01949 15.3235 3.13168 15.3715L9.64568 18.6102C9.75764 18.6585 9.8783 18.6834 10.0002 18.6834C10.1222 18.6834 10.2428 18.6585 10.3548 18.6102L16.8688 15.3715C16.9809 15.3235 17.1016 15.2987 17.2236 15.2987C17.3456 15.2987 17.4663 15.3235 17.5784 15.3715L19.8532 16.5041C20.0489 16.5988 20.0489 16.7574 19.8532 16.8541ZM19.8532 10.2545L17.5784 9.12195C17.4663 9.07387 17.3456 9.04907 17.2236 9.04907C17.1016 9.04907 16.9809 9.07387 16.8688 9.12195L10.3548 12.3645C10.2427 12.4123 10.1221 12.437 10.0002 12.437C9.87837 12.437 9.75776 12.4123 9.64568 12.3645L3.13168 9.12195C3.01949 9.07388 2.8987 9.04909 2.77664 9.04909C2.65458 9.04909 2.5338 9.07388 2.4216 9.12195L0.146826 10.2545C-0.0465251 10.3512 -0.0465251 10.5102 0.146826 10.6079L9.64568 15.3353C9.75771 15.3834 9.87834 15.4082 10.0002 15.4082C10.1221 15.4082 10.2428 15.3834 10.3548 15.3353L19.8532 10.6079C20.0489 10.5102 20.0489 10.3517 19.8532 10.2545ZM0.146826 4.75753L9.6452 9.12195C9.87311 9.21139 10.1264 9.21139 10.3543 9.12195L19.8532 4.75753C20.0465 4.66762 20.0465 4.52116 19.8532 4.43174L10.3543 0.0678014C10.1266 -0.0226005 9.87293 -0.0226005 9.6452 0.0678014L0.146826 4.43174C-0.048942 4.52116 -0.048942 4.66762 0.146826 4.75753Z"
            fill="#6C6CEA"
          />
        </svg>
      ),
    };
    dispatch.setNavHeader(payload);
  }, []);

  return (
    <StyledMainWrapper direction="column" justify="start" align="start">
      <DashboardHeader />
      <StyledWrapper
        style={{ paddingLeft: '30px', paddingTop: '30px' }}
        direction="row"
        justify="flex-start">
        <InProgress />
        <NextEvents />
      </StyledWrapper>
    </StyledMainWrapper>
  );
};

const mapStateToProps = (state: any) => {
  return {};
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    dispatch: {
      setNavHeader: (payload: NavHeader) =>
        dispatch({ type: 'SET_NAV_HEADER', payload }),
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
