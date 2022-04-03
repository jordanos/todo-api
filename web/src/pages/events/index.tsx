/* eslint-disable react/react-in-jsx-scope */
import { useEffect } from 'react';
import { connect } from 'react-redux';
import Calendar from 'shared/components/Calendar';
import { StyledMainWrapper } from 'shared/components/Wrappers/Styles';
import { NavHeader } from 'shared/store/reducers/appReducer';

interface Props {
  dispatch: any;
}

const Events: React.FC<Props> = ({ dispatch }) => {
  const payload = {
    title: 'Events',
    icon: (
      <svg
        width="22"
        height="25"
        viewBox="0 0 22 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M0 22.6562C0 23.9502 1.0498 25 2.34375 25H19.5312C20.8252 25 21.875 23.9502 21.875 22.6562V9.375H0V22.6562ZM15.625 13.0859C15.625 12.7637 15.8887 12.5 16.2109 12.5H18.1641C18.4863 12.5 18.75 12.7637 18.75 13.0859V15.0391C18.75 15.3613 18.4863 15.625 18.1641 15.625H16.2109C15.8887 15.625 15.625 15.3613 15.625 15.0391V13.0859ZM15.625 19.3359C15.625 19.0137 15.8887 18.75 16.2109 18.75H18.1641C18.4863 18.75 18.75 19.0137 18.75 19.3359V21.2891C18.75 21.6113 18.4863 21.875 18.1641 21.875H16.2109C15.8887 21.875 15.625 21.6113 15.625 21.2891V19.3359ZM9.375 13.0859C9.375 12.7637 9.63867 12.5 9.96094 12.5H11.9141C12.2363 12.5 12.5 12.7637 12.5 13.0859V15.0391C12.5 15.3613 12.2363 15.625 11.9141 15.625H9.96094C9.63867 15.625 9.375 15.3613 9.375 15.0391V13.0859ZM9.375 19.3359C9.375 19.0137 9.63867 18.75 9.96094 18.75H11.9141C12.2363 18.75 12.5 19.0137 12.5 19.3359V21.2891C12.5 21.6113 12.2363 21.875 11.9141 21.875H9.96094C9.63867 21.875 9.375 21.6113 9.375 21.2891V19.3359ZM3.125 13.0859C3.125 12.7637 3.38867 12.5 3.71094 12.5H5.66406C5.98633 12.5 6.25 12.7637 6.25 13.0859V15.0391C6.25 15.3613 5.98633 15.625 5.66406 15.625H3.71094C3.38867 15.625 3.125 15.3613 3.125 15.0391V13.0859ZM3.125 19.3359C3.125 19.0137 3.38867 18.75 3.71094 18.75H5.66406C5.98633 18.75 6.25 19.0137 6.25 19.3359V21.2891C6.25 21.6113 5.98633 21.875 5.66406 21.875H3.71094C3.38867 21.875 3.125 21.6113 3.125 21.2891V19.3359ZM19.5312 3.125H17.1875V0.78125C17.1875 0.351562 16.8359 0 16.4062 0H14.8438C14.4141 0 14.0625 0.351562 14.0625 0.78125V3.125H7.8125V0.78125C7.8125 0.351562 7.46094 0 7.03125 0H5.46875C5.03906 0 4.6875 0.351562 4.6875 0.78125V3.125H2.34375C1.0498 3.125 0 4.1748 0 5.46875V7.8125H21.875V5.46875C21.875 4.1748 20.8252 3.125 19.5312 3.125Z"
          fill="#6C6CEA"
        />
      </svg>
    ),
  };
  dispatch.setNavHeader(payload);
  useEffect(() => {}, []);

  return (
    <StyledMainWrapper direction="row" justify="flex-start" align="flex-start">
      <Calendar />
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

export default connect(mapStateToProps, mapDispatchToProps)(Events);
