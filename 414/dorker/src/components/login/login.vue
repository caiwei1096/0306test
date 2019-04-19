<template>
  <div>
    <canvas id="canvas"></canvas>
    <div class="outerbox">
      <div class="loginbox">
        <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" size="mini" class="demo-ruleForm">
          <el-form-item label="用户名" prop="pass" style="color:white; font-family: 微软雅黑" aria-placeholder="yonghuming">
            <el-input type="password" v-model="ruleForm2.pass" autocomplete="off" ></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="checkPass">
            <el-input type="password" v-model="ruleForm2.checkPass" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm2')">提交</el-button>
            <el-button @click="resetForm('ruleForm2')">重置</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>



</template>

<script>
  export default {
    name:'login',
    data() {
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入用户名'));
        } else {
          if (this.ruleForm2.checkPass !== '') {

            this.$refs.ruleForm2.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          callback();
        }
      };
      return {
        ruleForm2: {
          pass: '',
          checkPass: ''
        },
        rules2: {
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' }
          ],
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
            this.$router.push({path:'/home'})//页面的跳转
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    },
    mounted() {
      (function () {
        var canvasEl = document.getElementById('canvas');
        var ctx = canvasEl.getContext('2d');
        var mousePos = [0, 0];

        var easingFactor = 1.0;
        var backgroundColor = '#00008b';
        var nodeColor = '#fff';
        var edgeColor = '#fff';

        var nodes = [];
        var edges = [];

        function constructNodes() {
          for (var i = 0; i < 30; i++) {
            var node = {
              drivenByMouse: i == 0,
              x: Math.random() * canvasEl.width,
              y: Math.random() * canvasEl.height,
              vx: Math.random() * 1 - 0.5,
              vy: Math.random() * 1 - 0.5,
              radius: Math.random() > 2 ? 3 + Math.random() * 3 : 1 + Math.random() * 3
            };

            nodes.push(node);
          }

          nodes.forEach(function (e) {
            nodes.forEach(function (e2) {
              if (e == e2) {
                return;
              }

              var edge = {
                from: e,
                to: e2
              }

              addEdge(edge);
            });
          });
        }

        function addEdge(edge) {
          var ignore = false;

          edges.forEach(function (e) {
            if (e.from == edge.from && e.to == edge.to) {
              ignore = true;
            }

            if (e.to == edge.from && e.from == edge.to) {
              ignore = true;
            }
          });

          if (!ignore) {
            edges.push(edge);
          }
        }

        function step() {
          nodes.forEach(function (e) {
            if (e.drivenByMouse) {
              return;
            }

            e.x += e.vx;
            e.y += e.vy;

            function clamp(min, max, value) {
              if (value > max) {
                return max;
              } else if (value < min) {
                return min;
              } else {
                return value;
              }
            }

            if (e.x <= 0 || e.x >= canvasEl.width) {
              e.vx *= -1;
              e.x = clamp(0, canvasEl.width, e.x)
            }

            if (e.y <= 0 || e.y >= canvasEl.height) {
              e.vy *= -1;
              e.y = clamp(0, canvasEl.height, e.y)
            }
          });

          adjustNodeDrivenByMouse();
          render();
          window.requestAnimationFrame(step);
        }

        function adjustNodeDrivenByMouse() {
          nodes[0].x += (mousePos[0] - nodes[0].x) / easingFactor;
          nodes[0].y += (mousePos[1] - nodes[0].y) / easingFactor;
        }

        function lengthOfEdge(edge) {
          return Math.sqrt(Math.pow((edge.from.x - edge.to.x), 2) + Math.pow((edge.from.y - edge.to.y), 2));
        }

        function render() {
          ctx.fillStyle = backgroundColor;
          ctx.fillRect(0, 0, canvasEl.width, canvasEl.height);

          edges.forEach(function (e) {
            var l = lengthOfEdge(e);
            var threshold = canvasEl.width / 8;

            if (l > threshold) {
              return;
            }

            ctx.strokeStyle = edgeColor;
            ctx.lineWidth = (1.0 - l / threshold) * 2.5;
            ctx.globalAlpha = 1.0 - l / threshold;
            ctx.beginPath();
            ctx.moveTo(e.from.x, e.from.y);
            ctx.lineTo(e.to.x, e.to.y);
            ctx.stroke();
          });
          ctx.globalAlpha = 1.0;

          nodes.forEach(function (e) {
            if (e.drivenByMouse) {
              return;
            }

            ctx.fillStyle = nodeColor;
            ctx.beginPath();
            ctx.arc(e.x, e.y, e.radius, 0, 2 * Math.PI);
            ctx.fill();
          });
        }

        window.onresize = function () {
          canvasEl.width = document.body.clientWidth;
          canvasEl.height = canvasEl.clientHeight;

          if (nodes.length == 0) {
            constructNodes();
          }

          render();
        };

        window.onmousemove = function (e) {
          mousePos[0] = e.clientX;
          mousePos[1] = e.clientY;
        }

        window.onresize(); // trigger the event manually.
        window.requestAnimationFrame(step);
      }).call(this);
    }
  }
</script>

<style lang="less" scoped>
  canvas{
    width: 100%;
    height: 100%;
    position: absolute;

  }
.outerbox{
  .loginbox{
    width: 400px;
    height: 200px;
    position: absolute;
    left: 50%;
    top:50%;
    margin-left: -200px;
    margin-top: -100px;
    color: white;
}
}
</style>
<style>
  .el-input--mini .el-input__inner{
    width:200px;
    min-width: 200px;

  }
  .el-form-item__label{
    color: white;
    font-family: 微软雅黑;

  }

</style>
