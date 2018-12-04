import React, { Component } from 'react';
import router from 'umi/router';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';

class SearchList extends Component {

  handleTabChange = key => {
    const { match } = this.props;
    switch (key) {
      case 'list':
        router.push(`${match.url}/activity`);
       break;
      case 'applications':
        router.push(`${match.url}/applications`);
        break;
      case 'projects':
        router.push(`${match.url}/projects`);
        break;
      default:
        break;
    }
  };

  handleFormSubmit = value => {
    // eslint-disable-next-line
    console.log(value);
  };

  render() {
    
    const tabList = [
      {
        key: 'list',
        tab: '列表test',
      },
      {
        key: 'projects',
        tab: '项目',
      },
      {
        key: 'applications',
        tab: '应用',
      },
    ];

    const { match, children, location } = this.props;
    return (

      <PageHeaderWrapper
        title="搜索列表"
        tabList={tabList}
        tabActiveKey={location.pathname.replace(`${match.path}/`, '')}
        onTabChange={this.handleTabChange}
      >
        {children}
        
      </PageHeaderWrapper>
    );
  }
}
export default SearchList;
