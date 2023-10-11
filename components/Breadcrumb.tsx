"use client";
import { Breadcrumb } from "keep-react-demo";
import { CaretRight, House } from "phosphor-react";

const BreadcrumbComponent = () => {
  return (
    <div className="my-3 flex w-full flex-col gap-5">
      <Breadcrumb
        breadCrumbWithBorder={true}
        aria-label="Default breadcrumb example"
        separatorIcon={<CaretRight size={20} color="#AFBACA" />}
      >
        <Breadcrumb.Item href="#" icon={<House size={24} color="#AFBACA" />}>
          Products
        </Breadcrumb.Item>
        <Breadcrumb.Item href="#">Category</Breadcrumb.Item>
        <Breadcrumb.Item href="#">.....</Breadcrumb.Item>
        <Breadcrumb.Item active="base" href="#">
          Product
        </Breadcrumb.Item>
      </Breadcrumb>
      <Breadcrumb
        breadCrumbWithBorder={true}
        aria-label="Default breadcrumb example"
        separatorIcon={<CaretRight size={20} color="#AFBACA" />}
      >
        <Breadcrumb.Item href="#" icon={<House size={24} color="#AFBACA" />}>
          Products
        </Breadcrumb.Item>
        <Breadcrumb.Item href="#">Category</Breadcrumb.Item>
        <Breadcrumb.Item href="#">.....</Breadcrumb.Item>
        <Breadcrumb.Item active="border" href="#">
          Product
        </Breadcrumb.Item>
      </Breadcrumb>
      <Breadcrumb
        breadCrumbWithBorder={true}
        aria-label="Default breadcrumb example"
        separatorIcon={<CaretRight size={20} color="#AFBACA" />}
      >
        <Breadcrumb.Item href="#" icon={<House size={24} color="#AFBACA" />}>
          Products
        </Breadcrumb.Item>
        <Breadcrumb.Item href="#">Category</Breadcrumb.Item>
        <Breadcrumb.Item href="#">.....</Breadcrumb.Item>
        <Breadcrumb.Item active="bar" href="#">
          Product
        </Breadcrumb.Item>
      </Breadcrumb>
    </div>
  );
};
export default BreadcrumbComponent;
