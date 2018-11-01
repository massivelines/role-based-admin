import * as React from "react";
// import { Panel } from "react-bootstrap";
import { Card, CardHeader } from 'reactstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretLeft } from "@fortawesome/pro-solid-svg-icons";
// import FontAwesome from 'react-fontawesome';
import ScrollIntoViewIfNeeded from 'react-scroll-into-view-if-needed';

export interface CollapseListProps {
  className: string;
  content: React.ReactNode[];
  hasPreview?: boolean;
  id: number;
  key?: number;
  title: string;
}

interface CollapseListState {
  cardCollapse: boolean;
  hasPreview: boolean;
}

const scrollOptions = {
  behavior: 'smooth',
  scrollMode: 'always',
  block: 'start',
  inline: 'start',
  skipOverflowHiddenElements: false,
};

export class CollapseList extends React.Component<CollapseListProps, CollapseListState> {
  constructor(props) {
    super(props);

    this.cardCollapseToggle = this.cardCollapseToggle.bind(this);

    this.state = {
      cardCollapse: false,
      hasPreview: this.props.hasPreview
    };
  }

  cardCollapseToggle() {
    this.setState({ cardCollapse: !this.state.cardCollapse });
  }

  render() {
    // console.log(this.props);

    const caretDirection = () => {
      if (this.state.cardCollapse == true) {
        return "open";
      } else {
        return "closed";
      }
    };

    const caretPreview = () => {
      if (this.state.hasPreview == true) {
        return "caret-preview";
      }
    };

    return (
      <ScrollIntoViewIfNeeded
        options={scrollOptions}
        active={this.state.cardCollapse}
      >
      <Card className={this.props.className} key={this.props.id}>
        {/* TODO: if has preview carrot different color */}
        {/* TODO: maybe delay expanding for bottom */}

          {/* Title */}
          <CardHeader
            id={`cardToggle-${this.props.id}`}
            className="collapse-list-item-header"
            onClick={this.cardCollapseToggle}
          >
            {this.props.title}
            <FontAwesomeIcon
              className={
                "collapse-list-toggle-arrow " +
                caretDirection() +
                " " +
                caretPreview()
              }
              icon={faCaretLeft}
            />
            {/* <FontAwesome
              className={
                'fa fas collapse-list-toggle-arrow ' +
                caretDirection() +
                ' ' +
                caretPreview()
              }
              name="caret-left"
            /> */}
          </CardHeader>

          {/* Content */}
          <div
            className={
              "collapse-list-content " +
              (this.state.cardCollapse ? "open" : "closed")
            }
          >
            {this.props.content}
          </div>
      </Card>
      </ScrollIntoViewIfNeeded>
    );
  }
}

export default CollapseList;
