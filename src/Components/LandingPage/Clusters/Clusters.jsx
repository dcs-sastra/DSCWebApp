import React from "react";
import "./Cluster.css";

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}

const clusters = importAll(
  require.context("../../../assets/clusters", false, /\.(png|jpe?g|svg)$/)
);

export default function Clusters() {
  return (
    <>
      <div className="clusters">
        <div className="container">
          <h3 className="text-center">Clusters</h3>
          <div className="divider cluster_divider"></div>
          <div className="row cluster-collection">
            <div className="col-md-3 col-sm-6">
              <div className="card cluster_card">
                <img src={clusters["android.svg"]} alt="" />
                <div className="card-overlay green_bg">
                  <div className="card-info ">Android</div>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="card cluster_card">
                <img src={clusters["flutterio-icon.svg"]} alt="" />
                <div className="card-overlay blue_bg">
                  <div className="card-info">Flutter</div>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="card cluster_card">
                <img src={clusters["setting.svg"]} alt="" />
                <div className="card-overlay blue_bg">
                  <div className="card-info">Machine Learning</div>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="card cluster_card">
                <img src={clusters["coding.svg"]} alt="" />
                <div className="card-overlay green_bg">
                  <div className="card-info">Web</div>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="card cluster_card">
                <img src={clusters["learning.svg"]} alt="" />
                <div className="card-overlay blue_bg">
                  <div className="card-info">Cloud</div>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="card cluster_card">
                <img src={clusters["vr-glasses.svg"]} alt="" />
                <div className="card-overlay red_bg">
                  <div className="card-info">VR / AR</div>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="card cluster_card ">
                <img src={clusters["article.svg"]} alt="" />
                <div className="card-overlay yellow_bg">
                  <div className="card-info">Content Writing</div>
                </div>
              </div>
            </div>

            <div className="col-md-3 col-sm-6">
              <div className="card cluster_card">
                <img src={clusters["tools.svg"]} alt="" />
                <div className="card-overlay green_bg">
                  <div className="card-info">Graphic Designing</div>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="card cluster_card">
                <img src={clusters["report.svg"]} alt="" />
                <div className="card-overlay yellow_bg">
                  <div className="card-info">Marketing</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
