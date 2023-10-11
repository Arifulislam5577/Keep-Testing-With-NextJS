import AccordionCollapseAll from "@/components/Accordion";
import AlertComponent from "@/components/Alert";
import AreaChartComponent from "@/components/AreaChart";
import AvatarComponent from "@/components/Avatar";
import AvatarWithAddIcon from "@/components/AvatarGroup";
import BadgeComponent from "@/components/Badge";
import BarChartComponent from "@/components/BarChart";
import BreadcrumbComponent from "@/components/Breadcrumb";
import KeepButtonType from "@/components/Button";
import ButtonGroupComponent from "@/components/ButtonGroup";
import ProductCard from "@/components/Card";
import CarouselComponent from "@/components/Carousel";
import CheckboxComponent from "@/components/Checkbox";
import CheckboxGroupComponent from "@/components/CheckboxGroup";
import DatePickerComponent from "@/components/DatePicker";
import DropdownComponent from "@/components/Dropdown";
import EmptyComponent from "@/components/Empty";
import ModalComponent from "@/components/Modal";
import NotificationComponent from "@/components/Notification";
import NumberInputComponent from "@/components/NumberInput";
import PaginationComponent from "@/components/Pagination";
import PlayButtonComponent from "@/components/PlayButton";
import PopoverComponent from "@/components/Popover";
import ProgressComponent from "@/components/Progress";
import RadioComponent from "@/components/Radio";
import RatingComponent from "@/components/Rating";
import SearchBarComponent from "@/components/SearchBar";
import SidebarComponent from "@/components/SideBar";
import SkeletonComponent from "@/components/Skeleton";
import SliderComponent from "@/components/Slider";
import SpinnerComponent from "@/components/Spinner";
import StatisticComponent from "@/components/Statistic";
import StepComponent from "@/components/Step";
import SwitchComponent from "@/components/Switch";
import TabsComponent from "@/components/Tab";
import TableComponent from "@/components/Table";
import TagComponent from "@/components/Tag";
import InputComponent from "@/components/TextInput";
import TextAreaComponent from "@/components/Textarea";
import TimelineComponent from "@/components/Timeline";
import TooltipComponent from "@/components/Tooltip";
import TreeComponent from "@/components/Tree";
import {
  HorizontalUploadPending,
  UploadPendingComponent,
} from "@/components/Upload";

export default function Home() {
  return (
    <main className="py-10">
      <div className="container mx-auto">
        <div className="flex flex-col gap-10">
          <AlertComponent />

          <AccordionCollapseAll />
          <div className="w-2/6">
            <DatePickerComponent />
          </div>
          <AreaChartComponent />
          <AvatarComponent />
          <AvatarWithAddIcon />
          <BadgeComponent />
          <BarChartComponent />
          <BreadcrumbComponent />
          <ButtonGroupComponent />
          <ProductCard />
          <CarouselComponent />
          <CheckboxGroupComponent />
          <EmptyComponent />
          <div className="flex items-center justify-between gap-5 flex-wrap">
            <KeepButtonType />
            <CheckboxComponent />
            <DropdownComponent />
            <ModalComponent />
            <NotificationComponent />
            <NumberInputComponent />
            <PlayButtonComponent />
          </div>
          <ProgressComponent />
          <PaginationComponent />
          <PopoverComponent />
          <RadioComponent />
          <RatingComponent />
          <SearchBarComponent />
          <SidebarComponent />
          <SkeletonComponent />
          <SliderComponent />
          <SpinnerComponent />
          <StatisticComponent />
          <StepComponent />
          <SwitchComponent />
          <TableComponent />
          <TabsComponent />
          <TagComponent />
          <TextAreaComponent />
          <InputComponent />
          <TimelineComponent />
          <TooltipComponent />
          <TreeComponent />
          <UploadPendingComponent />
          <HorizontalUploadPending />
        </div>
      </div>
    </main>
  );
}
