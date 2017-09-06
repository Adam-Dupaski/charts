// tslint:disable max-line-length
import "plotly.js";

declare module "plotly.js" {
    export type BarMode = "group" | "stack";
    export interface Layout {
        barmode: BarMode;
    }

    export interface ScatterHoverData {
        event: MouseEvent;
        points: Array<{
            x: string | number;
            y: number;
            pointNumber: number;
            curveNumber: number;
            data: ScatterData;
            xaxis: {
                d2p: (point: string | number) => number;
                _offset: number;
            };
            yaxis: {
                l2p: (point: number) => number;
                _offset: number;
            };
        }>;
    }

    export interface PieHoverData {
        event: MouseEvent;
        points: Array<{
            cx: number;
            cy: number;
            pointNumber: number;
            curveNumber: number;
            color: string;
            label: string;
            text: string;
        }>;
    }

    export interface ScatterData {
        mxObjects: mendix.lib.MxObject[]; // custom property, not part of the official plotly.js api
        orientation?: "h" | "v";
    }

    export interface PieData {
        hole: number;
        hoverinfo?: "label" | "percent" | "name" | "label+percent" | "label+name" | "percent+name" | "label+percent+name" | "skip" | "none";
        labels: string[];
        name?: string;
        type: "pie";
        values: number[];
        marker?: {
            colors: string[];
        };
    }

    export interface PlotlyHTMLElement extends HTMLElement {
        on(event: "plotly_hover", callback: (data: PieHoverData) => void): void;
    }
}
