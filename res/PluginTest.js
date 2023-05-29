
app.LoadPlugin("pressnet");

function OnStart() {
    plg = app.Createpressnet();

    var lay = app.CreateLayout("Linear", "VCenter,FillXY");
    btn = app.CreateButton("GetVersion");
    btn.SetOnTouch(CallPlugin);
    lay.AddChild(btn);
    app.AddLayout(lay);
}

function CallPlugin() {
    alert(plg.GetVersion());
}