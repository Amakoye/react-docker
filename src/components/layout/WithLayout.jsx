import { Avatar, Breadcrumb, Icon, Layout, Menu } from "antd";
import BreadcrumbItem from "antd/lib/breadcrumb/BreadcrumbItem";
import SubMenu from "antd/lib/menu/SubMenu";
import Title from "antd/lib/typography/Title";

const WithLayout = ({ children, pageTitle }) => {
  const { Header, Footer, Sider, Content } = Layout;

  return (
    <div>
      <Layout>
        <Header
          style={{
            position: "fixed",
            left: 0,
            top: 0,
            right: 0,
            zIndex: 1,
          }}
        >
          <Avatar style={{ float: "right" }} icon="user" />
          <Title style={{ color: "white" }} level={3}>
            PostApp
          </Title>
        </Header>
        <Layout>
          <Sider
            width={200}
            style={{
              overflow: "auto",
              height: "100vh",
              position: "fixed",
              left: 0,
              marginTop: "65px",
            }}
          >
            <Menu defaultSelectedKeys={["dashboard"]} mode="inline">
              <Menu.Item key={"dashboard"}>Dashboard</Menu.Item>
              <SubMenu
                title={
                  <span>
                    <Icon type="mail" />
                    <span>About us</span>
                  </span>
                }
              >
                <Menu.ItemGroup title="Country 1">
                  <Menu.Item key={"location 1"}>Location 1</Menu.Item>
                  <Menu.Item key={"location 2"}>Location 2</Menu.Item>
                </Menu.ItemGroup>
              </SubMenu>
            </Menu>
          </Sider>
          <Layout>
            <Content
              style={{
                padding: "0 50px",
                marginLeft: "200px",
                marginTop: "65px",
              }}
            >
              <Breadcrumb style={{ margin: "16px 0" }}>
                <BreadcrumbItem>{pageTitle}</BreadcrumbItem>
              </Breadcrumb>
              <div
                style={{
                  background: "#fff",
                  padding: 24,
                  minHeight: "80vh",
                  borderRadius: 10,
                }}
              >
                {children}
              </div>
            </Content>
            <Footer style={{ textAlign: "center" }}>
              Ant Design practice project
            </Footer>
          </Layout>
        </Layout>
      </Layout>
    </div>
  );
};

export default WithLayout;
