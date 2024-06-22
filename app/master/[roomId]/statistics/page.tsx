/**
 * v0 by Vercel.
 * @see https://v0.dev/t/k6q3V3wPXLu
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
// import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
// import { ResponsiveBar } from "@nivo/bar"
// import { ResponsivePie } from "@nivo/pie"
// import { ResponsiveLine } from "@nivo/line"

export default function Component() {
  return (
    <div className='w-full max-w-6xl mx-auto py-12 px-4 md:px-6'>
      <div className='flex flex-col gap-8'>
        <div className='bg-[#d42f2f] rounded-lg p-6 text-white text-center'>
          <h1 className='text-3xl font-bold'>General Knowledge Quiz</h1>
          <h2 className='text-2xl font-semibold mt-2'>Question 12</h2>
        </div>
        <div className='bg-background rounded-lg p-6'>
          <h3 className='text-2xl font-bold mb-4'>
            What is the capital city of Australia?
          </h3>
          <div className='grid grid-cols-2 gap-4'>
            <div className='bg-red-100 border-2 border-red-500 rounded-lg p-4 flex flex-col gap-2'>
              <div className='text-lg font-semibold'>A. Sydney</div>
              <div className='text-sm text-muted-foreground'>25%</div>
            </div>
            <div className='bg-red-100 border-2 border-red-500 rounded-lg p-4 flex flex-col gap-2'>
              <div className='text-lg font-semibold'>B. Melbourne</div>
              <div className='text-sm text-muted-foreground'>15%</div>
            </div>
            <div className='bg-green-100 border-2 border-green-500 rounded-lg p-4 flex flex-col gap-2'>
              <div className='text-lg font-semibold'>C. Canberra</div>
              <div className='text-sm text-muted-foreground'>50%</div>
            </div>
            <div className='bg-red-100 border-2 border-red-500 rounded-lg p-4 flex flex-col gap-2'>
              <div className='text-lg font-semibold'>D. Brisbane</div>
              <div className='text-sm text-muted-foreground'>10%</div>
            </div>
          </div>
        </div>
        <div className='grid grid-cols-3 gap-6'>
          <div className='bg-background rounded-lg p-4 flex flex-col gap-2'>
            <div className='text-sm text-muted-foreground'>Participants</div>
            <div className='text-3xl font-bold'>1,234</div>
          </div>
          <div className='bg-background rounded-lg p-4 flex flex-col gap-2'>
            <div className='text-sm text-muted-foreground'>
              Current Question
            </div>
            <div className='text-3xl font-bold'>12</div>
          </div>
          <div className='bg-background rounded-lg p-4 flex flex-col gap-2'>
            <div className='text-sm text-muted-foreground'>Progress</div>
            <div className='text-3xl font-bold'>75%</div>
          </div>
        </div>
        <div className='grid grid-cols-2 gap-6'>
          <div className='bg-background rounded-lg p-6'>
            <h4 className='text-xl font-semibold mb-4'>Answer Distribution</h4>
            <div className='aspect-[16/9] bg-gray-200'>
              Bar Chart Placeholder
            </div>
          </div>
          <div className='bg-background rounded-lg p-6'>
            <h4 className='text-xl font-semibold mb-4'>Correct vs Incorrect</h4>
            <div className='aspect-square bg-gray-200'>
              Pie Chart Placeholder
            </div>
          </div>
        </div>
        <div className='bg-background rounded-lg p-6'>
          <h4 className='text-xl font-semibold mb-4'>Participants Over Time</h4>
          <div className='aspect-[16/9] bg-gray-200'>
            Line Chart Placeholder
          </div>
        </div>
      </div>
    </div>
  )
}

// function BarChart(props) {
//   return (
//     <div {...props}>
//       <ResponsiveBar
//         data={[
//           { name: "Jan", count: 111 },
//           { name: "Feb", count: 157 },
//           { name: "Mar", count: 129 },
//           { name: "Apr", count: 150 },
//           { name: "May", count: 119 },
//           { name: "Jun", count: 72 },
//         ]}
//         keys={["count"]}
//         indexBy="name"
//         margin={{ top: 0, right: 0, bottom: 40, left: 40 }}
//         padding={0.3}
//         colors={["#2563eb"]}
//         axisBottom={{
//           tickSize: 0,
//           tickPadding: 16,
//         }}
//         axisLeft={{
//           tickSize: 0,
//           tickValues: 4,
//           tickPadding: 16,
//         }}
//         gridYValues={4}
//         theme={{
//           tooltip: {
//             chip: {
//               borderRadius: "9999px",
//             },
//             container: {
//               fontSize: "12px",
//               textTransform: "capitalize",
//               borderRadius: "6px",
//             },
//           },
//           grid: {
//             line: {
//               stroke: "#f3f4f6",
//             },
//           },
//         }}
//         tooltipLabel={({ id }) => `${id}`}
//         enableLabel={false}
//         role="application"
//         ariaLabel="A bar chart showing data"
//       />
//     </div>
//   )
// }

// function LineChart(props) {
//   return (
//     <div {...props}>
//       <ResponsiveLine
//         data={[
//           {
//             id: "Desktop",
//             data: [
//               { x: "Jan", y: 43 },
//               { x: "Feb", y: 137 },
//               { x: "Mar", y: 61 },
//               { x: "Apr", y: 145 },
//               { x: "May", y: 26 },
//               { x: "Jun", y: 154 },
//             ],
//           },
//           {
//             id: "Mobile",
//             data: [
//               { x: "Jan", y: 60 },
//               { x: "Feb", y: 48 },
//               { x: "Mar", y: 177 },
//               { x: "Apr", y: 78 },
//               { x: "May", y: 96 },
//               { x: "Jun", y: 204 },
//             ],
//           },
//         ]}
//         margin={{ top: 10, right: 10, bottom: 40, left: 40 }}
//         xScale={{
//           type: "point",
//         }}
//         yScale={{
//           type: "linear",
//         }}
//         axisTop={null}
//         axisRight={null}
//         axisBottom={{
//           tickSize: 0,
//           tickPadding: 16,
//         }}
//         axisLeft={{
//           tickSize: 0,
//           tickValues: 5,
//           tickPadding: 16,
//         }}
//         colors={["#2563eb", "#e11d48"]}
//         pointSize={6}
//         useMesh={true}
//         gridYValues={6}
//         theme={{
//           tooltip: {
//             chip: {
//               borderRadius: "9999px",
//             },
//             container: {
//               fontSize: "12px",
//               textTransform: "capitalize",
//               borderRadius: "6px",
//             },
//           },
//           grid: {
//             line: {
//               stroke: "#f3f4f6",
//             },
//           },
//         }}
//         role="application"
//       />
//     </div>
//   )
// }

// function PieChart(props) {
//   return (
//     <div {...props}>
//       <ResponsivePie
//         data={[
//           { id: "Jan", value: 111 },
//           { id: "Feb", value: 157 },
//           { id: "Mar", value: 129 },
//           { id: "Apr", value: 150 },
//           { id: "May", value: 119 },
//           { id: "Jun", value: 72 },
//         ]}
//         sortByValue
//         margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
//         cornerRadius={0}
//         padAngle={0}
//         borderWidth={1}
//         borderColor={"#ffffff"}
//         enableArcLinkLabels={false}
//         arcLabel={(d) => `${d.id}`}
//         arcLabelsTextColor={"#ffffff"}
//         arcLabelsRadiusOffset={0.65}
//         colors={["#2563eb"]}
//         theme={{
//           labels: {
//             text: {
//               fontSize: "18px",
//             },
//           },
//           tooltip: {
//             chip: {
//               borderRadius: "9999px",
//             },
//             container: {
//               fontSize: "12px",
//               textTransform: "capitalize",
//               borderRadius: "6px",
//             },
//           },
//         }}
//         role="application"
//       />
//     </div>
//   )
// }
